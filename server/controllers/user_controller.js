// controller.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { dbConnect } = require("../db.js");

async function signUp(req, res) {
  try {
    const { fullname, email, password } = req.body;
    const client = await dbConnect();
    const existingUser = await client.query(
      'SELECT * FROM users WHERE email = $1;',
      [email]
    );
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await client.query(
      'INSERT INTO users (fullname, email, password) VALUES ($1, $2, $3);',
      [fullname, email, hashedPassword]
    );
    client.release();
    res.status(201).json({ message: "User created successfully, Please Sign in to your account!" });
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ message: "Error signing up user" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const client = await dbConnect();

    const userQuery = {
      text: 'SELECT * FROM users WHERE email = $1',
      values: [email],
    };

    const userResult = await client.query(userQuery);
    const user = userResult.rows[0];

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }


    const secret = process.env.JWT_SECRET || "d7cb19e515a209001e803e0c8117df3fd010d70d3fc690089228be32b62b6ddf"
    const token = jwt.sign({
      userId: user.user_id,
      fullname: user.fullname,
      email: user.email
    }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
    res
      .cookie("token", token,
        {
          httpOnly: true,expiresIn: 3600000,
          domain: 'https://www.main-bvxea6i-fygohu5xgmi7k.ovhcloud-fr-1.webpaas.ovh.net'
        }
      )
      .send({ message: "logged in" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }

}
const logout = (req, res) => {
  res
    .cookie("token", "", {
      expires: new Date(0),

      httpOnly: false,
      secure: true,
      sameSite: 'none',
      domain: 'https://www.main-bvxea6i-fygohu5xgmi7k.ovhcloud-fr-1.webpaas.ovh.net'

    })
    .send();
};
const authenticateToken = (req, res) => {
  try {
    const { token } = req.cookies;
    const secret = process.env.JWT_SECRET || "d7cb19e515a209001e803e0c8117df3fd010d70d3fc690089228be32b62b6ddf"

    if (!token) {
      return res.json(false);
    }
    jwt.verify(token, secret, {}, async (err, userInfo) => {
      if (err) throw err;
      const user = {
        logged: true,
        data: userInfo
      }
      res.json(user)
    });

  } catch (err) {
    res.json(err);
  }

};

module.exports = {
  signUp, login, logout,
  authenticateToken
};

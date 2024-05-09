import React, { useState } from 'react';
import './LoginSignup.css';
import Footer from '../../components/footer/Footer';
import personWhiteBg from '../../assets/Login/Person white_bg.svg';
import personDarkBg from '../../assets/Login/Person dark_bg.svg';
import cvDarkBg from '../../assets/Login/CV dark_bg.svg';
import cvWhiteBg from '../../assets/Login/CV white_bg.svg';
import envelopeWhiteBg from '../../assets/Login/Envelope white_bg.svg';
import envelopeDarkBg from '../../assets/Login/Envelope dark_bg.svg';
import submitDarkBg from '../../assets/Login/Submit dark_bg.svg';
import submitWhiteBg from '../../assets/Login/Submit white_bg.svg';
import rightArrow from '../../assets/Login/right arrow login.svg';
import Navbar from '../../components/navbar/Navbar';

const LoginSignup = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const handleContinue = () => {
    if (activeSection === 'profile' || activeSection === 'info') {
      setActiveSection('cv');
    } else if (activeSection === 'cv') {
      setActiveSection('cover');
    } else if (activeSection === 'cover') {
      setActiveSection('submit');
    }
  };

  const getImageSrc = (imageName) => {
    if ((activeSection === 'profile' && imageName === 'person') || (activeSection === 'info' && imageName === 'person')) {
      return personDarkBg;
    } else if (activeSection === 'cv' && imageName === 'cv') {
      return cvDarkBg;
    } else if (activeSection === 'cover' && imageName === 'envelope') {
      return envelopeDarkBg;
    } else if (activeSection === 'submit' && imageName === 'submit') {
      return submitDarkBg;
    } else {
      return imageName === 'person' ? personWhiteBg : cvWhiteBg && imageName === 'cv' ? cvWhiteBg : envelopeWhiteBg && imageName === 'submit' ? submitWhiteBg : envelopeWhiteBg;
    }
  };
  const handleLoginClick = () => {
    setActiveSection('profile');
  };

  const handleSignupClick = () => {
    setActiveSection('info');
  };
  const getHeadingText = () => {
    return activeSection === 'profile' ? 'Login' : 'Sign up';
  };

  return (
    <>
    <Navbar/>
      <h1 className="title_login">{getHeadingText()}</h1>
      <div className="login_container">
        <div className="login_img">
          <img className="profile_login" src={getImageSrc('person')} alt="img" />
          <img className="cv_login" src={getImageSrc('cv')} alt="img" />
          <img className="envelope_login" src={getImageSrc('envelope')} alt="img" />
          <img className="submit_login" src={getImageSrc('submit')} alt="img" />
        </div>

        <div
          className={`login_content ${activeSection === 'profile' ? 'active_profile' : ''}`}
        >
          <h2>New User profile</h2>
          <p>
            Don't have an account ?{' '}
            <b>
              <a className="login_signup" href="/" onClick={handleSignupClick}>
                Signup
              </a>
            </b>
          </p>
          <form action="">
            <label htmlFor="mail">E-MAIL ADDRESS *</label>
            <input placeholder="Enter your E-mail" type="mail" name="email" />
            <label htmlFor="password">PASSWORD *</label>
            <input
              className="password_login"
              placeholder="Enter Password"
              type="password"
              name="password"
            />
          </form>
          <a className="continue_login continue_profile" href="/" >
            Continue <img src={rightArrow} alt="img" />
          </a>
        </div>
        <div className={`login_content ${activeSection === 'info' ? 'active_info' : ''}`}>
          <h2>New User profile</h2>
          <p>
            Already have an account ?{' '}
            <b>
              <a className="login_login" href="/" onClick={handleLoginClick}>
                Log in
              </a>
            </b>
          </p>
          <form action="">
            <div className="info_form1">
              <div >
                <label htmlFor="mail_signup">E-MAIL ADDRESS *</label>
                <input placeholder='Enter your E-mail ' type="text" name='mail_signup' />
              </div>
              <div>
                <label htmlFor="salutation_signup">SALUTATION *</label>
                <input placeholder='Mr / Ms' type="text" name='salutation_signup' />
              </div>
              <div>
                <label htmlFor="fname_signup">FIRST NAME *</label>
                <input placeholder='Enter your Name' type="text" name='fname_signup' />
              </div>
              <div>
                <label htmlFor="lname_signup">LAST NAME *</label>
                <input placeholder='Enter your Last name' type="text" name='lname_signup' />
              </div>

            </div>
            <div className="info_form2">
              <div >
                <label htmlFor="phone_signup">PHONE *</label>
                <input placeholder='Enter your phone ' type="phone" name='phone_signup' />
              </div>
              <div>
                <label htmlFor="date_signup">BIRTH DATE *</label>
                <input  type="date" name='date_signup' />
              </div>
              <div>
                <label htmlFor="city_signup">HOME CITY</label>
                <input placeholder='City' type="text" name='city_signup' />
              </div>
              
              
            </div>
            <label htmlFor="password_signup">PASSWORD *</label>
            <input style={{width:'85%'}} placeholder='Enter Password' type="password" name='password_signup' />
            <label htmlFor="repassword_signup">RE-ENTER PASSWORD *</label>
            <input style={{width:'85%'}} placeholder='Re-Enter Password' type="password" name='repassword_signup' />
          </form>
          <a className="continue_login continue_cv" href="/" onClick={handleContinue}>
            Continue <img src={rightArrow} alt="img" />
          </a>
        </div>
        <div className={`login_content ${activeSection === 'cv' ? 'active_cv' : ''}`}>
          <h2>Curriculum vitae</h2>
          <form action="">
            <label htmlFor="cv">CHOOSE FILE*</label>
            <input className='import_cv' type="file" name="cv" title=' ' />
            <p className='import_file_writing' style={{ textAlign: 'left' }}>Import your file  or drag and drop</p>
          </form>
          <a className="continue_login continue_cv" href="/" onClick={handleContinue}>
            Continue <img src={rightArrow} alt="img" />
          </a>
        </div>
        <div className={`login_content ${activeSection === 'cover' ? 'active_cover' : ''}`}>
          <h2>Cover letter</h2>
          <form action="">
            <label htmlFor="cover">Adding A Short Cover Letter*</label>
            <input className='textarea_login'
              type="textarea"
              name="cover"
            />
          </form>
          <a className="continue_login continue_cover" href="/" onClick={handleContinue}>
            Continue <img src={rightArrow} alt="img" />
          </a>
        </div>
        <div className={`login_content ${activeSection === 'submit' ? 'active_submit' : ''}`}>
          <h2>Thank you for your application! <br /> Your registration is now complete!</h2>
          <form action="">
            <input className='submit_login' type="submit" name="Submit" value='Submit' />
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LoginSignup;

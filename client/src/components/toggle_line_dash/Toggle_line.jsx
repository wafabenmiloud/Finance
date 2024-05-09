import React, { useState } from "react";
import "./Toggle_line.css";
import arrow from "../../assets/toggle_line.svg";
import arrow1 from "../../assets/arrowdown.svg";

export default function ToggleLine({ title, details }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="toggle_line">
        <div className="toggle_line_row">
          <h6>{title}</h6>
          <button
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <img src={arrow1} alt="img" /> : <img src={arrow} alt="img" />}
          </button>
        </div>
        <div>
            
        </div>

        {open && <p>{details}</p>}
      </div>
    </>
  );
}

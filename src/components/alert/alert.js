import React from "react";

function Alert(props) {
  return (
    <div
      role="alert"
      className={`alert  fade in`}
      style={{ width: "80%", margin: "0 auto", marginTop: 18,  }}
      alert = {props.alert}
    >
      {props.children}
    </div>
  );
}

export default Alert;

import React from 'react';

export default function Alert(props) {
  return (
    <div style={{ height: "50px" , color: props.mode.backgroundColor === "light"? "black": "white",
    backgroundColor: props.mode.backgroundColor === 'light' ? 'dark' : 'light'}}>
      {props.alert && (
        <div className={`alert alert-${`primary`} alert-dismissible fade show`} role="alert">
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}

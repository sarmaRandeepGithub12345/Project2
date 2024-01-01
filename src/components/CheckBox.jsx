import React from "react";

const CheckBox = ({ checked, onChange, id, className }) => {
  return (
    <>
      <input
        id={id}
        className={className}
        checked={checked}
        type="checkbox"
        onChange={onChange}
      />
    </>
  );
};

export default CheckBox;

import React, { useEffect, useState } from "react";

const Radio = (props) => {
  const [checked, setChecked] = useState(false);
  const { checkboxHandler, setData, label } = props;

  useEffect(() => {
    checkboxHandler(label, checked);
  }, [checked]);

  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            {props.label}
          </span>
          <div className="input-group-text">
            <input
              checked={checked}
              onChange={() => setChecked(!checked)}
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Radio;

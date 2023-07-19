import React, { useEffect, useState } from "react";

const TextBox = (props) => {
  const [value, setValue] = useState();
  const { setData, label, password, setCopyPassWord } = props;

  useEffect(() => {
    setData((pre) => {
      return { ...pre, [label]: value };
    });
    setCopyPassWord(false);
  }, [value]);

  // useEffect(() => {
  //   if (password) {
  //   }
  // }, [password]);

  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            {props.label}
          </span>
        </div>
        <input
          type={props.type}
          className="form-control"
          placeholder={props.label}
          aria-label={props.label}
          aria-describedby="basic-addon1"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default TextBox;

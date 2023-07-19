import React, { useEffect, useState } from "react";

import TextBox from "./TextBox";
import Radio from "./Radio";
import label from "../utils/Label";
import textLabel from "../utils/TextBoxLabel";
import "./WorkFlow.less";

const WorkFlow = (props) => {
  const [data, setData] = useState();
  const [password, setPassword] = useState();
  const [copyPassWord, setCopyPassWord] = useState(false);
  const checkboxHandler = (label, checked) => {
    setData((pre) => {
      return { ...pre, [label]: checked };
    });
  };

  let passwrd = "";
  let passwordLength = "";
  let upperC = false;
  let lowerC = false;
  let numC = false;
  let symbolC = false;

  const copyPassword = (passwrd) => {
    if (passwrd) {
      setCopyPassWord(true);
      navigator.clipboard.writeText(passwrd);
      console.log(passwrd);
    }
  };
  const passwordCreator = (data) => {
    if (data !== undefined) {
      var chars =
        "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      passwordLength = data["Password Length"];
      var letter;
      var keyCode;
      if (data["Include UpperCase Letter"]) {
        for (let i = 0; i < chars.length; i++) {
          letter = chars.charAt(i);

          keyCode = letter.charCodeAt(i);
          if (keyCode >= 65 && keyCode <= 90) {
            upperC = !upperC;
          }
        }
      }

      if (data["Include LowerCase Letter"]) {
        for (let i = 0; i < chars.length; i++) {
          letter = chars.charAt(i);

          keyCode = letter.charCodeAt(i);
          if (keyCode >= 97 && keyCode <= 122) {
            lowerC = !lowerC;
          }
        }
      }
      if (data["Include Numbers"]) {
        for (let char of chars) {
          if (Number.isInteger(Number(char))) {
            numC = !numC;
          }
        }
      }

      if (data["Include Symbols"]) {
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if (format.test(chars)) {
          symbolC = !symbolC;
        } else {
          return symbolC;
        }
      }
      if (data["Add Intial Text"]) {
        passwrd += data["Add Intial Text"];
        passwordLength--;
      }

      if (!upperC && !lowerC && !numC && !symbolC) {
        for (let i = 0; i <= passwordLength - 1; i++) {
          var randomNumber = Math.floor(Math.random() * chars.length);
          passwrd += chars.substring(randomNumber, randomNumber + 1);
        }
      }
      if (passwrd.length >= passwordLength) {
        setPassword(passwrd);
      }
    }
  };

  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Type Password..."
          aria-label="Type Password..."
          aria-describedby="basic-addon1"
          value={password}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            onClick={() => copyPassword(password)}
            id="basic-addon1"
          >
            {copyPassWord ? "Copied.." : "Copy"}
          </button>
        </div>
      </div>
      {textLabel?.map((items, index) => {
        return (
          <>
            <TextBox
              setCopyPassWord={setCopyPassWord}
              label={items}
              type="text/number"
              setData={setData}
              data={data}
              key={index}
            />
          </>
        );
      })}

      {label?.map((items, index) => {
        return (
          <>
            <Radio
              label={items}
              key={index}
              checkboxHandler={checkboxHandler}
              setData={setData}
            />
          </>
        );
      })}

      <button
        style={{ marginLeft: "30%" }}
        className="btn btn-secondary"
        id="password-btn"
        onClick={() => passwordCreator(data)}
      >
        Create Password
      </button>
    </div>
  );
};

export default WorkFlow;

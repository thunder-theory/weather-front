import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "../../App.css";

const loginDB = (username, password) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://ac54507fe2ea9428abcb050e29baf295-2046403196.ap-northeast-2.elb.amazonaws.com/swagger-ui/index.html#/user-controller/loginUsingPOST",
      data: {
        username: username,
        password: password,
      },
    });
  };
};

export default function SignInPage() {
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  return (
    <header style={HeaderStyle}>
      <h1 className="main-title text-center"></h1>
      <div className="text-center m-5-auto">
        <h2>로 그 인</h2>
        <form action="/calendar">
          <p>
            <label>아이디</label>
            <br />
            <input
              type="text"
              name="first_name"
              required
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </p>
          <p>
            <label>패스워드</label>
            <br />
            <input
              type="password"
              name="password"
              required
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </p>
          <p>
            <button id="sub_btn" type="submit" onClick={() => loginDB()}>
              로그인
            </button>
          </p>
        </form>
      </div>
    </header>
  );
}

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: "#224957",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

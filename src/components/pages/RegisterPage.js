import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import "../../App.css";

const signUpDB = (username, password, place) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://ac54507fe2ea9428abcb050e29baf295-2046403196.ap-northeast-2.elb.amazonaws.com/swagger-ui/index.html#/user-controller/signupUsingPOST",
      data: {
        username: username,
        password: password,
        place: place,
      },
    })
      .then((res) => {
        window.alert(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default function SignUpPage() {
  return (
    <div className="text-center m-5-auto">
      <h2>회 원 가 입</h2>
      <form action="/calendar">
        <p>
          <label>아이디</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p>
          <label>패스워드</label>
          <br />
          <input type="password" name="password" requiredc />
        </p>
        <p>
          <label>주소</label>
          <br />
          <input type="text" name="email" required />
        </p>
        <p>
          <label>이름</label>
          <br />
          <input type="text" name="email" required />
        </p>

        <p>
          <button id="sub_btn" type="submit" onClick={() => signUpDB()}>
            가 입 하 기
          </button>
          <br />
          <p>
            <Link to="/login">로그인 하기</Link>
          </p>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/">홈 으로</Link>
        </p>
      </footer>
    </div>
  );
}

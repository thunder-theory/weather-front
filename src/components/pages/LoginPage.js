import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

export default function SignInPage() {
  return (
    <div className="text-center m-5-auto">
      <h2>로 그 인</h2>
      <form action="/calendar">
        <p>
          <label>아이디</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p>
          <label>패스워드</label>
          <br />
          <input type="password" name="password" required />
        </p>
        <p>
          <button id="sub_btn" type="submit">
            로그인
          </button>
        </p>
        <p>
          <button id="reg_btn" type="submit">
            회원가입
          </button>
        </p>
      </form>
    </div>
  );
}

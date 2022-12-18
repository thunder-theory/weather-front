import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

export default function SignUpPage() {
  return (
    <div className="text-center m-5-auto">
      <h2>회 원 가 입</h2>
      <form action="/calender">
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
          <button id="sub_btn" type="submit">
            가 입 하 기
          </button>
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

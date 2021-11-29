import React, { Fragment } from 'react';
import styles from './assets/styles.css';
export default function () {
  return (
    <Fragment>
      <li className={styles.Guestbook__List__Item}>
        <strong>지나가다가</strong>
        <p>
          별루입니다.
          <br />
          비번:1234 -,.-
        </p>
        <strong></strong>
        <a href="">삭제</a>
      </li>

      <li className={styles.Guestbook__List__Item}>
        <strong>둘리</strong>
        <p>
          안녕하세요
          <br />
          홈페이지가 개 굿 입니다.
        </p>
        <strong></strong>
        <a href="">삭제</a>
      </li>

      <li className={styles.Guestbook__List__Item}>
        <strong>주인</strong>
        <p>
          아작스 방명록 입니다.
          <br />
          테스트~
        </p>
        <strong></strong>
        <a href="">삭제</a>
      </li>
    </Fragment>
  );
}

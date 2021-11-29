import React, { Fragment } from 'react';
import GuestBook from './GuestBook';
import styles from './assets/styles.css';

export default function () {
  return (
    <div className={styles.App}>
      <GuestBook />
    </div>
  );
}

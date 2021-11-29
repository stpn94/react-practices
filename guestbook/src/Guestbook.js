import React from 'react';
import GuestbookAddForm from './GuestbookAddForm';
import GuestbookList from './GuestbookList';
import styles from './assets/styles.css';

export default function () {
  return (
    <div className={styles.GuestBook}>
      <h1>방명록</h1>
      <GuestbookAddForm />
      <GuestbookList />
    </div>
  );
}

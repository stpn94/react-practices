import React from 'react';
import styles from './assets/styles.css';
import GuestbookListItem from './GuestbookListItem';

export default function () {
  return (
    // <!--Begin: Guestbook List -->
    <ul className={styles.Guestbook__List}>
      <GuestbookListItem />
    </ul>
    // <!--End: Guestbook List -->
  );
}

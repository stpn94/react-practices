import React from 'react';
import TaskList from './TaskList';
import styles from '../assets/scss/Card.scss';

export default function Card({ title, description, status, tasks }) {
    const styleSideColor = {
      position: 'absolute',
      top:0,
      left:0,
      bottom: 0,
      width: 3,
      backgroundColor: status == 'ToDo' ? '#3e7e28' : status == 'Doing' ? '#bd8031' : '#222'  
    };

    return (
        <div className={ styles.Card }>
          <div style={ styleSideColor }/>
          <div className={ styles.Card__Title }>{ title }</div>
          <div className={ styles.Card__Details }>
            { description }
            <TaskList tasks={ tasks }/>
          </div>
        </div>    
    );
}
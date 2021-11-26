import React, { useState } from 'react';
import TaskList from './TaskList';
import styles from '../assets/scss/Card.scss';

export default function Card({ title, description, status, tasks }) {
    const [showDetails, setShowDetails] = useState(true);

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
          <div 
            className={ 
              showDetails ? 
                [styles.Card__Title, styles.Card__Title__open].join(' ') :
                styles.Card__Title
            }
            onClick={ () => setShowDetails(!showDetails) }>
            { title }
          </div>
          {
            showDetails ?
              <div className={ styles.Card__Details }>
                { description }
                <TaskList tasks={ tasks }/>
              </div> :
              null
          }
        </div>    
    );
}
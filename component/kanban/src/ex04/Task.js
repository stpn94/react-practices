import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/css/Task.css';

export default function Task({ name }) {
    return (
        <li className={ styles.TaskList__Task }>
            <input type='checkbox' defaultChecked={ true } />
            { name }
            <a href='#' className={styles['TaskList__Task--remove']}></a>
        </li>
    );
}

Task.propTypes = {
    name: PropTypes.string.isRequired
}
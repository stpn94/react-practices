import React, { Component, Fragment } from 'react';
import Clock01 from './Clock01';
import Clock02 from './Clock02';

export default function() {
    return (
        <Fragment>
            <p>JSX Tutorials - 공백(Blank Space)</p>
            <Clock01 />
            <Clock02 />
        </Fragment>
    );
}
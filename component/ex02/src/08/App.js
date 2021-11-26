import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBell as farBell } from '@fortawesome/free-regular-svg-icons';
import { faBell, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function App() {
    library.add(farBell, faBell, fab);

    return (
        <Fragment>
            <h2>React Awesome Font Examples</h2>

            {/* regular */}
            <FontAwesomeIcon icon={ farBell } />
            <FontAwesomeIcon icon={ ["far", "bell"] } />

            {/* solid */}
            <FontAwesomeIcon icon={ faBell } />
            <FontAwesomeIcon icon={ ["fas", "bell"] } />

            {/* brands */}
            <FontAwesomeIcon icon={ ["fab", "github"] } />
            <FontAwesomeIcon icon={ ["fab", "apple"] } />
            <FontAwesomeIcon icon={ ["fab", "google"] } />

            {/* size */}
            <FontAwesomeIcon icon={ faBell } size='xs'/>
            <FontAwesomeIcon icon={ faBell } size='lg'/>
            <FontAwesomeIcon icon={ faBell } size='2x'/>
            <FontAwesomeIcon icon={ faBell } size='3x'/>
            <FontAwesomeIcon icon={ faBell } size='4x'/>


            {/* etc */}
            <FontAwesomeIcon icon={ faCheckCircle } style={ {color: 'blue'} } />
            <FontAwesomeIcon icon={ faTimesCircle } style={ {color: 'red'} } />
        </Fragment>    
    );
}
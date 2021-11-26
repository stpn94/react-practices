import React from 'react';
import PropTypes from 'prop-types';

export default function Email({no, firstName, lastName, email}) {
    return (
        <li>
            { `${firstName} ${lastName}` }
            <br/>
            { email }
        </li>
    )
}

Email.propTypes = {
    no: PropTypes.number,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}
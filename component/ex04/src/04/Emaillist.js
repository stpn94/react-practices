import React from 'react';
import Email from './Email';
import PropTypes from 'prop-types';

export default function Emaillist({ keyword, emails }) {
    console.log('rendering.... Emaillist');
    return (
        <ul className={ 'Emaillist' }>
            { 
                emails
                    .filter(item => item.firstName.indexOf(keyword) != -1 || item.lastName.indexOf(keyword) != -1 || item.email.indexOf(keyword) != -1)
                    .map(item => <Email
                                        key={ item.no }
                                        firstName={item.firstName}
                                        lastName={item.lastName}
                                        email={item.email} />)
            }
        </ul>        
    );    
}

Emaillist.propTypes = {
    emails: PropTypes.arrayOf(PropTypes.shape(Email.propTypes)) 
}
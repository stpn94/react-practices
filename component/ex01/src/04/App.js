import React from 'react';
import MyComponent from './MyComponent';

export default function() {
    return (
        <div id='App'>
            <MyComponent 
                /* props01={ '문자열' } : Not Required, Defualt Value Set */
                props02={ 1 }
                props03={ true }
                props04={ { no:1 } } 
                props05={ [1, 2, 3, 4] }
                props06={ () => '함수' }
                props07={ 100 }
                props08={ [true, false, true] }
                props09={ {no:1, name:'둘리', email:'dooly@gmail.com'} } />
        </div>    
    );    
}
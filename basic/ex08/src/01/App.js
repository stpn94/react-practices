import React, { createElement } from 'react';

export default function() {
   
    return (
        <div>
            <h2>App01</h2>
            <p>JSX Tutorials - 특징1: HTML과의 차이점</p>
            {/*
                1. 속성은 Camel Cased
            */}
            <input type='text' maxLength='10' />
            {/*
                2. Element는 꼭 닫혀야 한다.
                오류) <br>, <hr>, <input type='text'> <img src=''>
            */}
            <br/>
            <hr/>
            <img width='100px' src='https://www.nicepng.com/png/detail/222-2224705_react-js-logo.png'/>
            {/*
                3. 속성 이름은 DOM API 기반이다.
                <div id='box' class='box'><div>
                document.getElementById('box').className = 'box'
            */}
            <div id='box' className='box'>
                box 입니다.
            </div>
        </div>    
    );

}
'use strict'; // 블록 스코프 변수(ES6)

var users = [{
  no: 0,
  name: '마이콜',
  email: 'michol@gmail.com'
}, {
  no: 1,
  name: '둘리',
  email: 'dooly@gmail.com'
}]; // 객체분해(ES6)

function print({
  no,
  name,
  email
}) {
  // 템플릿 문자열(ES6)
  console.log(`${no}: ${name} : ${email}`);
} // for..of(ES6)


for (var user of users) {
  print(user);
}

import React from 'react';
//함수형
export default function ListItem({ name, quantity }) {
  return (
    <li>
      {name} : {quantity}
    </li>
  );
}

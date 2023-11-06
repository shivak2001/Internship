import React from 'react'
function add() {
    alert('Addition Button clicked!');
  }
function sub() {
    alert('Subtraction Button clicked!');
  }
function multiply() {
    alert('Multiplication Button clicked!');
  }
function divide() {
    alert('Divide Button clicked!');
  }
export default function Test() {
  return (
    <div>
        <button id="b" onClick={add}>Addition</button>
        <button id="c" onClick={sub}>Subtraction</button>
        <button id="d"  onClick={multiply}>Multiplication</button>
        <button onClick={divide}>Division</button>
    </div>
  )
}

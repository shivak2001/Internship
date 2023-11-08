import React from 'react'
function Add() {
    alert('Addition Button clicked!');
  }
function Sub() {
    alert('Subtraction Button clicked!');
  }
function Multiply() {
    alert('Multiplication Button clicked!');
  }
function Divide() {
    alert('Divide Button clicked!');
  }
export default function Test() {
  return (
    <div>
        <button id="b" onClick={Add}>Addition</button>
        <button id="c" onClick={Sub}>Subtraction</button>
        <button id="d" onClick={Multiply}>Multiplication</button>
        <button id="a" onClick={Divide}>Division</button>
    </div>
  )
}

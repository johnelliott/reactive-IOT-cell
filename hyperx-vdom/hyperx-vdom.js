var vdom = require('virtual-dom')
var hyperx = require('hyperx')
var main = require('main-loop')

var hx = hyperx(vdom.h)
var loop = main({value: [0]}, render, vdom)


function list(state) {
  return hx`<div>${state}</div>`
}

document.body.appendChild(loop.target)

function render (state) {
  return sprk(state)
}

var defaultOptions = {
  status: 'online',
  data: 55,
  description: "cars per hour"
}

function sprk(config) {
  return hx`<div class="cell">
        <div class="cell__indicator">
          <svg width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0 0 16 0 16 16" fill="rgb(43, 198, 51)"/>
          </svg>
        </div>
        <div class="cell__info">
          <div class="cell__data">
            <div class="cell__number">${defaultOptions.data}</div>
            <div class="cell__description">cars/hr.</div>
          </div>
          <div class="cell__graph">
            <div class="cell__sparkline"></div></div>
          </div>
        </div>`
}

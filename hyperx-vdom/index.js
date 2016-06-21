var vdom = require('virtual-dom')
var hyperx = require('hyperx')
var main = require('main-loop')
//TODO install HEAD from github with TMCW pr with height
var Sparkline = require('./sparkline.js')

var hx = hyperx(vdom.h)
var svg = require('virtual-dom/virtual-hyperscript/svg')
var loop = main({value: [0]}, render, vdom)

document.body.appendChild(loop.target)

//document.onreadystatechange = function () {
//  if (document.readyState == "complete") {
//    //initApplication();
//    render()
//  }
//}
//document.body.appendChild(render())

function initApplication() {
  var node = document.querySelector('.cell__sparkline')
  console.log('node', node.parentNode)
  var rect = node.parentNode.getBoundingClientRect()
  var line = new Sparkline(node, {width: rect.width*.6, height: rect.height*.8})
  line.draw([1,2,10,5,1])
}

// TODO replace with redux or some state-getter-haver
function getState() {
  return { data: [1,2,10,5,1] }
}

function render() {
  return sprk(getState())
}

function sprk(config) {
  return hx`<div class="cell">
        <div class="cell__indicator">${indicator()}</div>
        <div class="cell__info">
          <div class="cell__data">
            <div class="cell__number">${config.data.length}</div>
            <div class="cell__description">cars/hr.</div>
          </div>
            <div class="cell__graph">
              <div class="cell__sparkline"></div>
            </div>
          </div>
        </div>
      </div>`
}

function indicator() {
  //return hx`<svg width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="0 0 16 0 16 16" fill="rgb(43, 198, 51)"/></svg>`
  //var polygon = vdom.h('polygon', [ points: "0 0 16 0 16 16", fill: "rgb(43, 198, 51)" ])
  var polygon = svg('polygon', {points: "0 0 16 0 16 16", fill: "#0f0"})
  console.log('polygon', polygon)
  return vdom.h('svg', {width: 16, height: 16, version: "1.1" }, [polygon])
}

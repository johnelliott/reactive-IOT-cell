var React = require('react');
var ReactDOM = require('react-dom');
var Counter = require('./counter-component.js')

const render = ()=>{
  ReactDOM.render(
    <Counter data={store.getState()} />,
    document.getElementById('root')
  );
};

// TODO replace with redux or some state-getter-haver
var store = {
  getState: function(){ return this.state },
  state: { hits: [1,2,10,5,1] }
}

function getState() {
  return store.state
}

window.add = (number)=>{
  store.state.hits.push(number)
  render()
}
window.render = render
//initial render
render()

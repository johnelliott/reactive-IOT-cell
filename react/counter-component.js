var React = require('react');
var ReactDOM = require('react-dom');
var Sparkline = require('./sparkline.js');

/*
 * Sparkline
 * TODO make this work as part of react rendering instead of outside..
 */
const Line = React.createClass({
   draw: function(props) {
     console.log('line props', props)
    var lineData = props.data.map(function(point) {
      return point;
    });
    var node = ReactDOM.findDOMNode(this);
    var line = new Sparkline(node, {width: 100, height: 20});
    line.draw(lineData);
  },
  componentDidMount: function() {
    this.draw(this.props);
  },
  shouldComponentUpdate: function () {
    return false;
  },
  componentWillReceiveProps: function(nextProps) {
    console.log('i will get props', nextProps);
    this.draw(nextProps);
  },
  render: function() {
    return ( <span></span> );
  }
});

/*
 * Counter
 */
const Counter = ({data}) =>{
  return <div className="cell">
    <div className="cell__indicator">
      <svg width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0 0 16 0 16 16" fill="rgb(43, 198, 51)"/>
      </svg>
    </div>
     <div className="cell__info">
       <div className="cell__data">
         <div className="cell__number">{data.hits.length}</div>
         <div className="cell__description">cars/hr.</div>
       </div>
       <div className="cell__graph">
         <Line className="cell__sparkline" data={data.hits} />
       </div>
     </div>
  </div>
}

module.exports = Counter

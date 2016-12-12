var React = require('react'),
    Nav = require('Nav'),
Main = React.createClass({
  render:function(){
    return(
      <div>
        <Nav/>
        <h2>Main Components</h2>
      </div>
    );
  }
});

module.exports = Main;

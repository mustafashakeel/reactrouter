var React = require('react'),
    Nav = require('Nav'),
Main = React.createClass({
  render:function(){
    console.log(this.props);
    return(
      <div>
        <Nav/>
        <h2>Main Components</h2>
        {this.props.children}

  </div>
    );
  }
});

module.exports = Main;

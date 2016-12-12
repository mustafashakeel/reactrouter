var React = require('react'),
{Link} =require('react-router'),
  Nav = React.createClass({
    render:function(){
      return (
          <div>
            <h2>Nav Components</h2>
              <Link to="/">Get Weather</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
          </div>
      );
    }
  });
  module.exports = Nav;

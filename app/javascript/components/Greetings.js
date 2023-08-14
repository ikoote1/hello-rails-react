import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomGreeting } from '../actions/greetingActions';

const Greeting = ({ message, fetchRandomGreeting }) => {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{message}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  message: state.greeting.message,
});

export default connect(mapStateToProps, { fetchRandomGreeting })(Greeting);

import axios from 'axios';

export const fetchRandomGreeting = () => dispatch => {
  axios.get('/api/greetings/random')
    .then(response => {
      dispatch({
        type: 'FETCH_RANDOM_GREETING',
        payload: response.data.message,
      });
    })
    .catch(error => {
      console.error('Error fetching greeting:', error);
    });
};

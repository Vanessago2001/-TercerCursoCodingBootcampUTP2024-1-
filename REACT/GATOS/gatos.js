fetch  (process.env.REACT_APP_API_URL)
  .then(response => response.json())
  .then(data => console.log(data));

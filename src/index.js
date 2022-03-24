import app from './app'

const port = process.env.PORT || 5000;

//const server = http.createServer();


// Start server here
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
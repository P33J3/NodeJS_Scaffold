import app from './app';

const port = process.env.PORT || 3000;

// Start server here
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

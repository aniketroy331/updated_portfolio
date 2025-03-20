const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index'); // Render views/index.ejs
});

app.get('/about', (req, res) => {
  res.render('partials/about'); // Render views/partials/about.ejs
});

app.get('/education',(req,res) => {
  res.render('partials/education');
})

app.get('/project',(req,res) => {
  res.render('partials/project');
})

app.get('/skill', (req,res)=>{
  res.render('partials/skill')
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
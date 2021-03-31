const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

const router = express.Router();

app.use(express.static('public'));
app.set('views', 'public/views'); 

// define the home page route
router.get('/', function(req, res) {
  res.render("index.html");
});

router.get('/projects', function(req, res) {
  res.render('sections/all.html');
});

router.get('/industrial', function(req, res) {
  res.render('sections/industrial.html');
});

router.get('/service', function(req, res) {
  res.render('sections/service.html');
});

router.get('/about', function(req, res) {
  res.render('about/about.html');
});

router.get('/projects/:proj', function(req, res) {
  res.render('projects/'+req.params.proj+'.html');
});

app.use(bodyParser.json());
app.use(router)
// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));


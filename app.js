const express = require('express');//using 'require' in order to use express
const data = require('./data.json');
const app = express(); //creates the express application

app.set('view engine', 'pug'); //setting express to use 'pug' templates engine in the views folder 

//setting a static route for images and stylesheets so they can be delivered to the browser and not processed by the app
app.use('/static', express.static('public'));

//rendering the index.pug from views
app.get('/', (req, res) => {
    //Also, setting the locals project object equel to data.projects
    res.render('index', { projects: data.projects });
});

//rending the about template and referencing the projects object
app.get('/about', (req, res) => {
    res.render('about', { projects });
});

//rendering the projects specific id
app.get("/project/:id", (req, res) => {
    //targeting the parameter with the specific project id
    let projectId = req.param.id;
    //creating a variable for a single project
    let project = projects[projectId]
    if(projectId) {
        res.render('project', { project });
    }
    
  });
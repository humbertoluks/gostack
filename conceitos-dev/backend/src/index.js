const express = require('express');
const cors = require('cors');
const { v4: uuidv4, validade: uuidValidate } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

function logRequests(request, response, next)
{
    const {method, url} = request

    const label = `[${method.toUppercase}] ${url}`

    console.log(label);

    return next(); // próximo middleare
}

function validateProjectId(request, response, next)
{
    const {id} = request.params;

    if(uuidValidate(id))
    {
        return response.status(400).json({ error : 'Invalid project ID.'});
    }

    return next();
}

app.use(logRequests);
app.use('/projects/:id', validateProjectId);

const projects = [
    {id: uuidv4(), title:"Projeto com React Native", owner: "owner 1"},
    {id: uuidv4(), title:"Projeto com Vue", owner: "owner 2"}
];

app.get('/projects', (request, response) => {
    const {title} = request.body;
    
    var results = title
        ? projects.filter(project => project.title.includes(title))
        : projects;

    return response.json(results);
});

app.post('/projects', (request, response) => {
    const {title, owner} = request.body;
    
    const project = {id: uuidv4(), title, owner};
    console.log(project);
    projects.push(project);
    return response.json(project);
});

app.put('/projects/:id', (request, response) => {
    const {id} = request.params;
    const {title, owner} = request.body;

    const projectIndex = projects.findIndex(projects => project.id === id);

    if (projectIndex < 0)
        return response.status(400).json({ error: 'Project not found.'})

    const project = {
        id,
        title,
        owner
    }

    projects[projectIndex] = project;

    return response.json(project);
});

app.put('/projects/:id', (request, response) => {
    const {id} = request.params;
    
    const projectIndex = projects.findIndex(projects => project.id === id);

    if (projectIndex < 0)
        return response.status(400).json({ error: 'Project not found.'})

    
    projects.splice(projectIndex,1);

    return response.status(204).send();
});

app.listen(3333, () => {
    console.log('backend started!')
});

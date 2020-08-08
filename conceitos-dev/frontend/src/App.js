import React, { useState, useEffect } from 'react';
import api from './service/api';

import './App.css';

// import backgroundImage from './Assets/xps.jpeg';
import Header from './Components/Header'

/**
 * Componente
 * Propriedade
 * Estado e Imutabilidade
 */

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then( response =>{
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject(){
        // push adiciona um novo valor o que quebra o conceito de imutabilidade do react
        // projects.push(`Novo Projeto ${Date.now()}`);

        // ... spread operator (porcorre o array e adiciona cada item para dentro do array)
        // recrio a variavel para estar de acordo com conceito de imutabilidade do React
        // setProjects([...projects, `Novo Projeto ${Date.now()}`]);
        const response = await api.post('projects', {
            title: `Novo Projeto ${Date.now()}`,
            owner: "Humberto Luksevicius",
        });

        const project = response.data;
        setProjects([...projects, project]);
    };

    return (
        <>
            <Header title="Projects" />
            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>
            <input type="button" value="Adicionar projeto" onClick={handleAddProject}/>
        </>
    );
}

export default App;

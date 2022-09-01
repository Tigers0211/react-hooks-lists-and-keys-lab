import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  const projList = projects.map((project) =>{
    return <ProjectItem key ={project.id} 
    project={project}
    name ={project.name}
    about={project.about}
    technologies = {project.technologies}/>

    
    
    })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projList}</div>
    </div>
  );
}

export default ProjectList;


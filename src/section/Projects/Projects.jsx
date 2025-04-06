import React from 'react'
import styles from './ProjectsStyles.module.css'
import todo from '../../assets/Todo.png'
import ProjectCard from '../../common/ProjectCard'
import freshburger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitlift from '../../assets/fitlift.png'

function Projects() {
  return (
    <section id= "projects" className={styles.container}>
     <h1 className='sectionTitle'>Projects</h1>
     <div className={styles.projectsContainer}>
      <ProjectCard 
      src={todo}
      link="https://github.com/Adithya-B2504/Todo-mern-stack"
      h3="TODO"
      p="TODO MERN APP"></ProjectCard>

    {/* <ProjectCard 
      src={freshburger}
      link="https://github.com/Adithya-B2504/Todo-mern-stack"
      h3="freshburger"
      p="TODO MERN APP"></ProjectCard>

    <ProjectCard 
          src={hipsster}
          link="https://github.com/Adithya-B2504/Todo-mern-stack"
          h3="hipsster"
      p="TODO MERN APP"></ProjectCard>

    <ProjectCard 
      src={fitlift}
      link="https://github.com/Adithya-B2504/Todo-mern-stack"
      h3="fitlift"
      p="TODO MERN APP"></ProjectCard> */}

      </div> 
    </section>
  )
}

export default Projects

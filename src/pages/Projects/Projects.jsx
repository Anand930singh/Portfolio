import React from 'react'
import Card from '../../components/project_card/Card';
import './Project.css';

function Projects() {

    const projectData=[
        {
            name:"The BlogPen",
            image:"https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces",
            github:"https://github.com/Anand930singh/CS-301-Project-1",
            tech:["ReactJS","NodeJS","ExpressJS","MongodDB"]
        },
        {
            name:"Rental Service",
            image:"https://economictimes.indiatimes.com/thumb/msid-66270287,width-640,resizemode-4,imgsize-353356/stop-buying-start-renting.jpg",
            github:"https://github.com/Anand930singh/DBMS_Rental_Service",
            tech:["ReactJS","NodeJS","ExpressJS","MySQL"]

        },
        {
            name:"Portfolio Website",
            image:"https://seekvectorlogo.com/wp-content/uploads/2019/05/portfolio-plus-banking-software-vector-logo.png",
            github:"https://github.com/Anand930singh/Portfoio.git",
            tech:["ReactJS"]
        },
        {
            name:"Room Booking",
            image:"https://gg4l.com/wp-content/uploads/images/catalog/roombooking-1.png",
            github:"https://github.com/Anand930singh/CS-102-Project",
            tech:["HTML","CSS","NodeJS","ExpressJS","MongoDB"]
        },
    ]

  return (
    <div className="project-list">
    {projectData.map((project, index) => (
      <Card
        key={index}
        name={project.name}
        image={project.image}
        github={project.github}
        tech={project.tech}
      />
    ))}
  </div>
  )
}

export default Projects
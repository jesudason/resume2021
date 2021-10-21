import React from 'react'
import ProjectData from '../components/ProjectData';
import ProjectTile from '../components/ProjectTile';
import '../components/Projects.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';


function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects-container">
                <Grid fluid>
                    <Row>
                        {ProjectData.map((data, index) => (
                            <ProjectTile data={data} key={index} />
                        ))}
                    </Row>
                </Grid>
            </div>
        </div>
    )
}

export default Projects;


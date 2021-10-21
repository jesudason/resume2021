import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Skills = {
    1:'scss', 
    2:'Squiz Matrix CMS', 
    3:'Funnelback', 
    4:'Javascript animation', 
    5:'SASS'
};

const ProjectTile = ({ data }) => (
    <Col xs={12} md={4} lg={3}>
        <div className="project-tile">
            { data.link && data.link.url
                ? (<a href={data.link.url} target="blank" rel="noopener noreferrer">
                <div className="content-wrapper">
                    {data.subtitle && <h4>{data.subtitle}</h4> }
                    <h3>{data.title}</h3>
                    <time>{data.date}</time>
                    <p>{data.description}</p>
                </div>
                <div class="tag-wrapper">
                    {data.category.tags.map((tag, index) => (
                        <span className={`tag skill${ tag }`}>
                        {Skills[tag]}
                    </span>
                    ))}
                </div>
            </a>)
            : (<div className="project-tile__wrapper">
                <div className="content-wrapper">
                    {data.subtitle && <h4>{data.subtitle}</h4> }
                    <h3>{data.title}</h3>
                    <time>{data.date}</time>
                    <p>{data.description}</p>
                </div>
                <div class="tag-wrapper">
                    {data.category.tags.map((tag, index) => (
                        <span className={`tag skill${ tag }`}>
                        {Skills[tag]}
                    </span>
                    ))}
                </div>
            </div>)
        }
        </div>  
    </Col>
)

export default ProjectTile;
import React from 'react'
import TimelineData from './TimelineData';
import TimelineItem from './TimelineItem';
import './Timeline.css';

function Timeline() {
    return <div className="timeline-container">
        {TimelineData.map((data, index) => (
            <TimelineItem data={data} key={index} />
        ))}
    </div>
    
}

export default Timeline;

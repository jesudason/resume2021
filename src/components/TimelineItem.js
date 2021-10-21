import React from 'react';

// const TimelineItem = ({ data }) => (
//     <div className="timeline-item">
//         <div className="timeline-item-content"> 
//             <time>{data.date}</time>
//             <p>{data.title}</p>
//             { data.link && (<a href={data.link.url} target="blank" rel="noopener noreferrer">{data.link.text}</a>)}
//             <span className="circle"></span>
            
//         </div>
//     </div>
// )

// const TimelineItem = ({ data }) => (
//     <>
//         <label className="timeline-item" for="chck{data.id}">
//             <a href="#popup{data.id}" className="timeline-item-content">  
//                 <time>{data.date}</time>
//                 <p>{data.text}</p>
//                 { data.link && (<a href={data.link.url} target="blank" rel="noopener noreferrer">{data.link.text}</a>)}
//                 <span className="circle"></span>
//             </a>
        
//             <div class="tab-content-wrapper" id="popup{data.id}">
//                 <a class="close" href="#">&times;</a>
//                 <div class="tab-content">
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
//                 </div>
//             </div>
//         </label>

//     </>
// )

const TimelineItem = ({ data }) => (
    <>
        <label className="timeline-item" for="chck{data.id}">
            <a href="#popup{data.id}" className="timeline-item-content">  
                <time>{data.date}</time>
                <p>{data.title}</p>
                <p>{data.company}</p>
                <span className="circle"></span>
            </a>
        
            <div class="tab-content-wrapper" id="popup{data.id}">
                <a class="close" href="#">&times;</a>
                <div class="tab-content">
                    <time>{data.date}</time>
                    <p>{data.title}</p>
                    <p>{data.company}</p>
                    <ul>
                        {data.content.skills.map((skill, index) => (
                            <li>{skill}</li>
                        ))}
                    </ul>
                    <p>
                        {data.content.description}
                    </p>
                </div>
            </div>
        </label>

    </>
)

export default TimelineItem;



// const TimelineItem = ({ data }) => (
//     <div className="timeline-item">
//         <div className="timeline-item-content">
//             <span className="tag" style={{ background: data.category.color }}>
//                 {data.category.tag}
//             </span>   
//             <time>{data.date}</time>
//             <p>{data.text}</p>
//             { data.link && (<a href={data.link.url} target="blank" rel="noopener noreferrer">{data.link.text}</a>)}
//             <span className="circle"></span>
            
//         </div>
//     </div>
// )
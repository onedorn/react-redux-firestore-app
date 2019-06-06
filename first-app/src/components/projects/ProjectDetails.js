import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container secion project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis asperiores beatae officiis quaerat laboriosam sapiente consequuntur dolor reiciendis enim pariatur dolore, consequatur, a, exercitationem ipsa blanditiis ad et. Veniam!</p>
                </div>
                <div className="card-action great lighten-4 grey-text">
                    <div>Posted by Vladymyr Syvoraksha</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails

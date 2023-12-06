import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faCss3, faHtml5, faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons'

function Skills() {
    return (
        <div id='skills' className='container-col center '>
            <h2 className='title'>Skills</h2>
            <div className='skill-row '>
                <div className='container-col center'>
                    <h1>Frontend</h1>
                    <div className='container-col center'>
                        <div className='skill'>
                            <h2>HTML5</h2> 
                            <div className='skill-icon'>
                                <FontAwesomeIcon icon={faHtml5} />
                            </div>
                        </div>
                        <div className='skill'>
                            <h2>CSS </h2>
                            <div className='skill-icon'>
                                <FontAwesomeIcon icon={faCss3}/>
                            </div>
                        </div>
                        <div className='skill'>
                            <h2>React</h2>
                            <div className='skill-icon'>
                                <FontAwesomeIcon icon={faReact}/>
                            </div>
                        </div>
                        <div className='skill'>
                            <h2>Three</h2>
                            <div className='skill-icon'>
                                <FontAwesomeIcon icon={faJs}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-col center'>
                    <h1>Backend</h1>
                    <div className='container-col center'>
                        <div className='skill'>
                            <h2>Node</h2>
                            <div className='skill-icon'>
                                <FontAwesomeIcon icon={faNode}/>
                            </div>
                        </div>
                        <div className='skill'>
                            <h2>Express</h2>
                            
                        </div>
                        <div className='skill'>
                            <h2>AWS</h2>
                            <div className='skill-icon'>
                                <FontAwesomeIcon icon={faAws}/>
                            </div>
                        </div>
                        <div className='skill'>
                            <h2>Mongo</h2>
                            
                        </div>
                        
                    </div>
                </div>
                <div className='container-col center'>
                    <h1>Other</h1>
                    <div className='container-col center'>
                        <div className='skill'>
                            <h2>Auth0</h2>
                        </div>
                        <div className='skill'>
                            <h2>Stripe</h2>
                        </div>
                        <div className='skill'>
                            <h2>Unreal Engine</h2>
                        </div>
                        <div className='skill'>
                            <h2>Blender</h2>
                        </div>
                        <div className='skill'>
                            <h2>Printful</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
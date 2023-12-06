import React from 'react'
import img1 from '../imgs/SynanthropySite.png'
import img2 from '../imgs/SynanthropySite2.png'
import img3 from '../imgs/IMS_site8.png'
import img4 from '../imgs/IMS_uploader1.png'
import logo from '../imgs/SynanthropyLogoV.png'

function Projects() {
    return (
        <div id='projects' className='container-col mid'>
            <h1 className='title'>Projects</h1>
            <p className='desc'>I have an interest in nature and ecosystems. So I choose to create my own. More about <a href='http://synanthropy.com/about'>Synanthropy</a>.</p>
            <div className='row '>
                <div className='project-container'>
                    <h2>Synanthropy API</h2>
                    <p className='desc'>While finalizing IMS I realized I didnt want to make a new <strong>AWS EC2</strong> instance for that project. 
                    So I figured why not combine both backends and make my own dedicated API server for Synanthropy. 
                    </p>
                    <p className='desc'>
                        The <strong>NODE</strong> server is runnning on an <strong>AWS EC2 </strong>instance using <strong>NGINX</strong>.                
                    </p>
                    <img width='150px' src={logo} alt="" />
                </div>
            </div>
            <div className='row '>
                <div className='project-container'>
                    <h2>Synanthropy E-Commerce Shop</h2>
                    <p className='desc'>An e-commerce website for Synanthropy. Integrated with <strong>STRIPE</strong>  to handle payments and <strong>Printful API</strong> to fulfill the orders,
                        this  <strong>SITE IS LIVE</strong> and orders take up to two weeks to complete because all items are <strong>MADE-TO-ORDER</strong>.
                    </p>
                    <p className='desc'>
                        Connected to Synanthropy API
                    </p>
                    <button className='button' onClick={() => window.location.href = 'https://synanthropy.com'}>Visit</button>
                </div>
                    <img className='project-img' src={img2} alt="" />
            </div>
            <div className='row '>
                <div className='project-container'>
                    <h2>Inventory Made Simple</h2>
                    <p className='desc'>Ever wanted to keep track of your items like an RPG. Simply upload an image/item/3D-models and any details of the item and place it. Don't have models? Choose from a growing catalog of 3D-models to begin shaping your inventory. Adjust the colors, transform the objects, or update the items details whenever. This subscription based service, using <strong>STRIPE</strong>, integrates <strong>THREE.JS</strong> and <strong>MONGODB</strong> to create a virtual enivornemt for user belongings. Models were sourced from Sketchfab and adjusted using <strong>BLENDER</strong>. </p>
                    <p className='desc'>
                    Connected to Synanthropy API
                    </p>
                    <p className='desc'>
                       <strong>Demo Acct</strong> : <b>inventorymadesimple@gmail.com</b>  
                    </p>
                    <p className='desc'>
                    <strong>Demo Pass</strong> : <b>IMSpassword123 </b> 
                    </p>
                    <button className='button' onClick={() => window.location.href = 'https://ims.synanthropy.com'}>Visit</button>
                </div>
                    <img className='project-img' src={img3} alt="" />
            </div>
            <div className='row '>
                <div className='project-container'>
                    <h2>IMS Model Uploader</h2>
                    <p className='desc'>Simply upload 3D-models and add details of the item. Click Upload and they arrive in IMS.  </p>
                    <p className='desc'>
                    Connected to Synanthropy API
                    </p>
                    <button className='button' onClick={() => window.location.href = 'https://github.com/Synanthropy/uploader'}>Visit Github</button>
                </div>
                    <img className='project-img' src={img4} alt="" />
            </div>
        </div>
    )
}

export default Projects
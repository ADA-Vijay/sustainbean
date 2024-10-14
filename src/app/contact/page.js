import React from 'react'

function page() {
  return (
    <div>
        <div style={{
            backgroundImage: 'url("contact-banner.png")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "75vh", // Full viewport height
            width: "100%", // Full width
            position: "relative",
          }}>


          </div>
          <div className='container contact-container'>
           <div className='row contact-row'>
                <div className='col-lg-6 contact-col'>
                    <input placeholder='Your Name'></input>
                    <input placeholder='Your Email'></input>
                    <input placeholder='Subject'></input>
                    <textarea className='' placeholder='Message'>

                    </textarea>
                    <button>SEND MESSAGE</button>
                </div>
                <div className='col-lg-6 contact-col'>
                    <img src='https://themewagon.github.io/givehope/images/img_3.jpg'></img>
                </div>
           </div>
          </div>
    </div>
  )
}

export default page
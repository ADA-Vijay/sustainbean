import Link from 'next/link'
import React from 'react'
function page() {
  return (
    <div>
        <div style={{
            backgroundImage: 'url("blog-banner.png")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "75vh", // Full viewport height
            width: "100%", // Full width
            position: "relative",
          }}>


          </div>
          <div className='container blog-container'>
            <div className='row blog-row'>
                <div className='col-md-4 blog-col'>
                    <div className='blog-img-div'>
                        <img src='https://themewagon.github.io/givehope/images/img_4.jpg'></img>
                    </div>
                    <p className='mt-3'>Be A Volunteer Today</p>
                    <p className='mt-3'>July 26, 208</p>
                    <p className='mt-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <Link href="/" >Read More</Link>
                </div>
                <div className='col-md-4 blog-col'>
                <div className='blog-img-div'>
                        <img src='https://themewagon.github.io/givehope/images/img_5.jpg'></img>
                    </div>
                    <p className='mt-3'>Be A Volunteer Today</p>
                    <p className='mt-3'>July 26, 208</p>
                    <p className='mt-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <Link href="/" >Read More</Link>
                </div>
                <div className='col-md-4 blog-col'>
                <div className='blog-img-div'>
                        <img src='https://themewagon.github.io/givehope/images/img_6.jpg'></img>
                    </div>
                    <p className='mt-3'>Be A Volunteer Today</p>
                    <p className='mt-3'>July 26, 208</p>
                    <p className='mt-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <Link href="/" >Read More</Link>
                </div>
            </div>
            <div className='row blog-row'>
                <div className='col-md-4 blog-col'>
                    <div className='blog-img-div'>
                        <img src='https://themewagon.github.io/givehope/images/img_4.jpg'></img>
                    </div>
                    <p className='mt-3'>Be A Volunteer Today</p>
                    <p className='mt-3'>July 26, 208</p>
                    <p className='mt-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <Link href="/" >Read More</Link>
                </div>
                <div className='col-md-4 blog-col'>
                <div className='blog-img-div'>
                        <img src='https://themewagon.github.io/givehope/images/img_5.jpg'></img>
                    </div>
                    <p className='mt-3'>Be A Volunteer Today</p>
                    <p className='mt-3'>July 26, 208</p>
                    <p className='mt-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <Link href="/" >Read More</Link>
                </div>
                <div className='col-md-4 blog-col'>
                <div className='blog-img-div'>
                        <img src='https://themewagon.github.io/givehope/images/img_6.jpg'></img>
                    </div>
                    <p className='mt-3'>Be A Volunteer Today</p>
                    <p className='mt-3'>July 26, 208</p>
                    <p className='mt-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <Link href="/" >Read More</Link>
                </div>
            </div>
          </div>
    </div>
  )
}

export default page
import React from 'react'
import web3desktop from '../images/image-web-3-desktop.jpg'
import web3mobile from '../images/image-web-3-mobile.jpg'

const Hero = () => {
  return (
      <main className='flex flex-col mt-5 md:flex-row md:space-x-5'>
          {/* left side */}
          <div className='md:w-2/3'>
              {/* images */}
              <div id='image' className='mb-2'>
                  <img src={web3desktop} alt="" className='hidden md:block' />
                  <img src={web3mobile} alt="" className='md:hidden'/>
              </div>

              {/* Content */}
              <div className='flex flex-col md:flex-row'>
                  <h2 id="title" className='flex-1 text-4xl font-inter font-extrabold my-3'>
                      The Bright Future of Web 3.0?
                  </h2>
                  
                  <div className='flex-1'>
                      <p className='text-base my-2 text-dark-grayish-blue'>
                          We dive into the next evalution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fullfilling its promise?
                      </p>

                      <div className='my-8'>
                          <a href="/" className='my-5 px-6 py-2 bg-soft-red text-white'>READ MORE</a>
                      </div>
                      
                  </div>
              </div>
          </div>

          {/* Right side */}
          <div className='h-auto bg-very-dark-blue md:w-1/3 text-white p-5'>
              <h1 id='title' className='text-3xl text-soft-orange font-inter font-bold'>
                  New
              </h1>

              <div className='my-7 font-inter'>
                  <h2 className='font-bold'>
                      Hydrogen VS Electric Cars
                  </h2>
                  <p className='text-sm my-3 font-sans font-light'>
                      Will hydrogen-fueled cars ever catch up to EVs?
                  </p>
              </div>
              <hr />
              <div className='my-7'>
              <h2 className='font-bold'>
                      The Downsides of the AI artistry
                  </h2>
                  <p className='text-sm my-3 font-sans font-light'>
                      What are the possible adverse effects of the on-demand AI image generation?
                  </p>
              </div>
              <hr />
              <div className='my-7'>
              <h2 className='font-bold'>
                      Is VC Funding Drying up?
                  </h2>
                  <p className='text-sm my-3 font-sans font-light'>
                      Private funding by VC firms is down 50% YOY. We take a look at what that means.
                  </p>
              </div>

          </div>
    </main>
  )
}

export default Hero
import React from 'react'
import list from './itemsList'

const Items = () => {
  return (
      <footer className='my-14  flex flex-col space-y-9 md:flex-row md:space-x-3 md:justify-between md:items-center'>
          
          {
              list.map((i) => {
                  return <div className='flex  md:w-1/3'>
                            <div className='w-24'>
                                <img src={i.image} alt={i.alt}  className='' />
                            </div>

                            <div className='ml-5 flex-1'>
                                <h1 className='text-2xl font-inter font-bold text-grayish-blue'>
                                    0{i.id}
                                </h1>
                                <h3 className='font-extrabold font-inter text-very-dark-blue'>
                                    {i.title}
                                </h3>
                                <p className='text-[15px] font-inter text-dark-grayish-blue'>
                                    {i.description}
                                </p>
                            </div>
                        </div>
              })
          }
          
          
    </footer>
  )
}

export default Items
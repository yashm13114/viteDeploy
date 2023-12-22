import React from 'react'
import Footer from './Footer'

const Home = () => {
  return (
    <>

      <div className='bg-black pb-10'>
        <div className=" container pt-10 mx-auto md:px-6">

          <section className="mb-32">

            <div className="container mx-auto text-center lg:text-left xl:px-32">
              <div className="flex grid items-center lg:grid-cols-2">
                <div className="mb-12 lg:mb-0">
                  <div
                    className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-gray-white dark:shadow-black/20 md:px-12 lg:-mr-14">
                    <h2 className="mb-8 text-3xl font-bold">Welcome to MAHASAGR SAREE CENTER</h2>
                    <p className="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0">
                      Mahasagar Sarees was started in the year 1965 with a vision to create niche in the market of wedding designer wears. It brings to you the latest and widest varietiesÂ of ladies clothing wear right from Lehengas, Sarees and Bridals.
                    </p>
                    <div className='flex justify-end'>
                    <h1>About Us</h1><hr className='w-20 mt-3 ml-2' />
                    </div>
                  </div>

                </div>

                <div>
                  <img src="https://thakursarees.in/assets/uploads/faq-banner.jpeg"
                    className="w-3/5
                     rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
                </div>
              </div>
            </div>

          </section>

        </div>
      </div>
      <Footer />

    </>
  )
}

export default Home
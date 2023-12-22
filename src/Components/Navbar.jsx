import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='pl-6 pr-8 flex justify-between items-center bg-black text-white h-16'>
                <div>
                    <img src="https://thakursarees.in//assets/uploads/logo.png" className='h-16' alt="" />
                </div>
                <div className=''>
                    <ol className='flex justify-end gap-14 text-xl'>
                        <li>Exclusive Collections</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ol>
                </div>

            </div>
            <div className='bg-white'>
                <hr />
            </div>
        </>

    )
}

export default Navbar
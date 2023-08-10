import React from 'react'
import navbarData from '../../data/navbar.data'

const Navbar = () => {
  return (
     <header>
        <nav
          className='navbar navbar-expand-lg'
          id='mainNav'
        >
          <div className='container'>
            <a
              className='navbar-brand'
              href='index.html'
            >
              <img
                src='assets/images/logo.png'
                alt='Logo'
                className='logo'
              />
            </a>
            <div className='d-flex flex-row align-items-center order-2 order-lg-3'>
              
              <a
                className='d-none d-md-block download button'
                href='#appStore'
              >
                Download Now
              </a>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#primaryNav'
                aria-controls='primaryNav'
                aria-expanded='false'
                aria-label='Toggle Primary Nav'
              >
                <span className='icon-bar top-bar' />
                <span className='icon-bar middle-bar' />
                <span className='icon-bar bottom-bar' />
              </button>
            </div>
            <div
              className='collapse navbar-collapse align-items-center justify-content-end order-3 order-lg-2'
              id='primaryNav'
            >
              <ul className='navbar-nav'>
                {
                    navbarData.map((item, index) => (<li className='nav-item'>
                  <a className='nav-link' href={item.path}>
                    {item.title}
                  </a>
                </li>
                ))}
                <li className='nav-item d-block d-md-none'>
                  <a
                    className='nav-link download'
                    href='#appStore'
                  >
                    Download Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  )
}

export default Navbar
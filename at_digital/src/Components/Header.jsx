import React, {useRef, useEffect} from 'react'

import { Container, Row } from "reactstrap"
import { NavLink, Link} from 'react-router-dom'

import logo from '../Assest/Logo.png'

import "../Styles/Header.css";

const nav_links = [
    {
        path: '/services',
        display:'SERVICES'
    },
    {
        path: '/about',
        display:'ABOUT US'
    },
    {
        path: '/contact',
        display:'CONTACT US'
    },
    {
        path: '/careers',
        display:'CAREERS'
    }
]

const Header = ( ) => {

    const headRef = useRef(null)

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
                headRef.current.classList.add('sticky_header')
            }else{
                headRef.current.classList.remove('sticky_header')
            }
        })
    }

    useEffect(()=>{
        stickyHeaderFunc()

        return window.removeEventListener('scroll', stickyHeaderFunc)
    })

  return (
  
    <header className="header" ref={headRef}>
        <Container>
            <Row>
                <div className="nav_wrapper d-flex">

                    <div className='logo'>
                    <Link to ='/home'> <img src={logo} alt="Logo"/> </Link>
                    </div>

                    <div className='navigation'>
                        <dl className="menu align-items-center">
                            {
                                nav_links.map((item, index)=> (
                                    <dd className='nav_item' key={index}>
                                    <NavLink to =
                                        {item.path} className={navClass => 
                                        navClass.isActive ? 'acttive_link' : ""}>
                                            {item.display}
                                    </NavLink>
                                    </dd>
                                ))
                            }
                        </dl>
                    </div>

                </div>
            </Row>
        </Container>
    </header>
  )
};

export default Header
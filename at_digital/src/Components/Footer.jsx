import React from 'react'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import '../Styles/Footer.css'

import Logo from '../Assest/Logo.png'

const quick_links = [
  {
      path: '/reactjs',
      display:'ReactJS'
  },
  {
      path: '/gatsby',
      display:'Gatsby'
  },
  {
    path: '/nextjs',
    display:'NextJS'
  },
  {
    path: '/nodejs',
    display:'NodeJS'
  }
]

const quick_links2 = [
  {
      path: '/socialmedia',
      display:'Social Media Marketing'
  },
  {
      path: '/webmobiledev',
      display:'Web & Mobile App Development'
  },
  {
      path: '/dataanalytics',
      display:'Data & Analytics'
  }
]

const Footer = () => {

  return (

    <footer className="footer">
      <Container>

        <Row style={{width: '1280px', height: '141px', justify: 'space-between'}}>
          <Col lg='6' style={{width: 'Fixed (413px)px',height: '102px',gap: '20px',color: 'white', marginTop: '40px', marginBottom: '39px'}}>
            <div className="logo">
            <Link to ='/home'> <img src={Logo} alt=''/> </Link>
              <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
            </div>
          </Col>

          <Col lg='6' style={{width: '522px',height: '141px',gap: '128px', color: 'white', display: 'flex', marginTop: '40px'}}>
            <div className='link1'>
              <h5 className="footer_link-title">Our Technologies</h5>

              <ListGroup className='footer_quick-links1'>
              {
                quick_links.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0' style={{ backgroundColor: '#6B3CC9'}}>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
              </ListGroup>
            </div>

            <div className='link2'>
              <h5 className="footer_link-title">Our services</h5>

              <ListGroup className='footer_quick-links2'>

              {
                quick_links2.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0' style={{ backgroundColor: '#6B3CC9'}}>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
              </ListGroup>
            </div>

          </Col>
        </Row>

        <Row style={{width: 'Fixed (630px)px',height: '25px',gap: '8px',marginTop: '100px'}}>
          <Col lg='12'>
            <hr style={{width: '630px',border: '1px 0px 0px 0px',color: 'white', margin: '0 405px 0 405px'}}/>
            <p className="copyright">Privacy Policy | Terms & Conditions</p>
          </Col>
        </Row>

      </Container>
    </footer>

  )
}

export default Footer

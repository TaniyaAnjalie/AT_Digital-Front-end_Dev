import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'reactstrap';

import "../Styles/Home.css"
import img1 from '../Assest/image 2.png'
import img2 from '../Assest/image 1.png'


const FAQItem = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);
  
    const toggleAnswer = () => {
      setShowAnswer(!showAnswer);
    };
  
    return (
      <div className="faq-item">
        <div className="question" onClick={toggleAnswer}>
          <h4>{question}{showAnswer ? <span>-</span> : <span>+</span>}</h4>
        </div>
        {showAnswer && (
          <div className="answer">
            <p>{answer}</p>
          </div>
        )}
      </div>
    );
};

function Home() {
  return (
    <>
        <section className='common_section'>
            <Container className= 'con'>
                <p>We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</p>
                <Button className='getcon'>Get free consultation</Button>
            </Container>
        </section>

        <Container className='con1' style={{width: '1064px',height: '414px',marginTop: '80px',left: '188px',gap: '108px',opacity: '0px'}}>
            <Row>
                <Col lg='6'>
                    <img src={img1} alt='pic 1'/>
                </Col>
                <Col lg='6' style={{width: 'Fixed (542px)px',height: '187px',gap: '20px', marginTop: '113.5px'}}>
                    <h3>Web & Mobile App Development</h3>
                    <p>Your web and mobile Apps are pieces of the puzzle to grow your business. 
                        We use frameworks which tailor content and engagement methods to respond to different intents shown 
                        by your potential customers who interact with your business online.</p>
                    <Button className='learnmore'>LEARN MORE</Button>
                </Col>
            </Row>
        </Container>

        <Container className='con1' style={{width: '1064px',height: '416px',marginTop: '80px',left: '188px',gap: '108px'}}>
            <Row>
                <Col lg='6' style={{width: 'Fixed (542px)px',height: '187px',gap: '20px', marginTop: '113.5px'}}>
                    <h3>Digital Strategy Consulting</h3>
                    <p>Your digital strategy should complement the overall marketing strategy of the company. 
                        In online marketing, each component will never work in isolation and every business needs a different mix. 
                        We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                    <Button className='learnmore'>LEARN MORE</Button>
                </Col>
                <Col lg='6'>
                    <img src={img2} alt='pic 2'/> 
                </Col>
            </Row>     
        </Container>

        <Container style={{ width: '846px', height: '392px', marginTop: '80px', left: '297px', gap: '28px', marginBottom: '80px' }}>
            <div className="faq-container">
                <div className="faq-title">
                    <h3>Frequently Asked Questions</h3>
                </div>

                <FAQItem
                    question="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                    answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
                />

                <FAQItem
                    question="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                    answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
                />

                <FAQItem
                    question="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                    answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
                />
            </div>
      </Container>
    </>
  )
}

export default Home

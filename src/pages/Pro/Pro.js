import React from 'react'
import { Container, CardsContainer, Free, Paid, BuyNow } from './Styles'
import FAQ from '../../components/FAQ'

function Pro() {
  return (
    <Container>
        <CardsContainer>
            <Free>
                <h3>Basic Plan</h3>
                <span>You can create upto <b>three</b> habits</span>
                <span style={{marginTop:'10px'}}> <b>Free</b> forever!</span>
                <img src='/icons/free.png'/>
            </Free>
            <Paid>
                <h3>Pro Plan </h3>
                <span> You can create <b>unlimited</b> habits</span>
                <span style={{marginTop:'10px'}}> <b>No</b> monthly charges, <b>one</b> time payment only!</span>
                <span style={{marginTop:'10px'}}><strike>$5</strike>, $1 only!</span>
                <BuyNow>$1 pay now</BuyNow>
            </Paid>
        </CardsContainer>
        <br/>

        <h2>FAQs</h2>
        <br/>
        <FAQ question="If I'm not happy with the service, can I get a refund?" answer="Yes, drop a email at merudra.official@gmail.com" />

        <FAQ question="I don't have cards, how can I proceed?" answer="Send your payment proof and email at merudra.official@gmail.com, I will try to activate your account as quickly as possible. My PayPal: merudra.official@gmail.com, UPI: 7309250579@ybl" />
        

        <FAQ question="Will I incur monthly charges?" answer="No, you will be charged only once." />

        <FAQ question="Why charging so low, means $1 only!" answer="I planned to keep it free, but I have to pay those server bills." />

    </Container>
  )
}

export default Pro
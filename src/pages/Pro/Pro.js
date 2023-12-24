import React from 'react'
import { Container, CardsContainer, Free, Paid, BuyNow } from './Styles'
import FAQ from '../../components/FAQ'
import useUser from '../../hooks/useUser'
import Loading from '../../components/Loading'
import useNotficationBar from '../../hooks/useNotificationBar'
import useTitle from '../../hooks/useTitle'

const productArray = [
  {
    id: "price_1OQNzSSF3SETRPhGS9QRZHcH",
    title: "DailyStreak PRO",
    price: 1,
    quantity: 1
  }
]

function Pro() {
  useTitle('Pro')
  const {user} = useUser()
  const { dispatchNotificationBar } = useNotficationBar()
  // console.log(user)
  const checkout = async () => {
    
    if(!user)
      return dispatchNotificationBar({type:'SET_CONTENT',content:{message:'Please login to continue',type:'alert'}})

    // if(user?.pro)
    //   return dispatchNotificationBar({type:'SET_CONTENT',content:{message:'You have already paid',type:'success'}})

    await fetch(`${process.env.REACT_APP_BASE_URL}/auth/checkout`, {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ items: productArray[0],_id:user._id })
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url)
        }
      })
  }

  if(user==='LOADING')
    return <Loading/>
 
  return (
    <Container>
      <CardsContainer>
        <Free>
          <h3>Basic Plan</h3>
          <span>You can create upto <b>three</b> habits</span>
          <span style={{ marginTop: '10px' }}> <b>Free</b> forever!</span>
          <img src='/icons/free.png' />
        </Free>
        <Paid>
          <h3>Pro Plan </h3>
          <span> You can create <b>unlimited</b> habits</span>
          <span style={{ marginTop: '10px' }}> <b>No</b> monthly charges, <b>one</b> time payment only!</span>
          <span style={{ marginTop: '10px' }}><strike>$19</strike>, $1 only! (₹ 85)</span>
          <BuyNow onClick={checkout}>$1 pay now</BuyNow>
          {user?.pro && <img src='/icons/paid.png' />}
        </Paid>
      </CardsContainer>
      <br />

      <h2>FAQs</h2>
      <br />
      <FAQ question="If I'm not happy with the service, can I get a refund?" answer="Yes, drop an email at merudra.official@gmail.com" />

      <FAQ question="I don't have cards, how can I proceed?" answer="Send your payment proof and email at merudra.official@gmail.com, I will try to activate your account as quickly as possible. My PayPal: merudra.official@gmail.com, UPI: srudra754@oksbi" />


      <FAQ question="Will I incur monthly charges?" answer="No, you will be charged only once." />

      <FAQ question="Why charging so low, means $1 only!" answer="I planned to keep it free, but I have to pay those server bills." />

    </Container>
  )
}

export default Pro
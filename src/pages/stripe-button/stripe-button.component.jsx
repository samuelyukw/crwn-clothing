import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51HRH2PJiSRSzhKrmw8Fg0X8Zbgp7hqmnI4hds5X0ipgWgdT3fLiVRrqT5F24XklQtugUBRfZExhsZuKRBOSgKXyf00O2zyb336'

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddressimage=''
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      acount={priceForStripe}
      panelable='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton

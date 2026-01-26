import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useEffect, useState } from 'react';

const Payment = () => {

  const [isUserPremium, setIsUserPremium] = useState(false);
  useEffect(() => {
    verifyPremiumUser();
  }, []);

  const verifyPremiumUser = async () => {
    const res = await axios.get(BASE_URL + "/premium/verify", {
      withCredentials: true,
    });

    if (res.data.isPremium) {
      setIsUserPremium(true);
    }
  };

    const handleBuyClick = async(type) => {

        const order = await axios.post(
             BASE_URL + "/payment/create",
            {
                membershipType: type,
        }, {withCredentials: true 

        });
        // open the razorpay dialog box

        const {keyId, amount, currency, notes, orderId} = order.data

        const options = {
            key: keyId, 
            amount,
            currency,
            name: 'Dev Tinder',
            description: 'Preimum to connect developers',
            order_id: orderId,
            prefill: {
              name: notes.firstName + " "+ notes.lastName,
              email: notes.emailId,
              contact: '9999999999'
            },
            theme: {
              color: '#F37254'
            },
             handler: verifyPremiumUser,
          };

        const rzp = new window.Razorpay(options);
      rzp.open();
    }
  return isUserPremium ? (
    "You're are already a premium user"
  ) : (
    <div>
        <div className="flex m-10">
    <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
        <h1 className='font-bold text-3xl'>Silver Membership</h1>
        <ul>
            <li> - Chat with other people</li>
            <li> - 100 connection requests per day </li>
            <li> - blue tick</li>
            <li> - 3 months</li>
        </ul>
        <button className='btn btn-secondary' onClick={() => handleBuyClick("silver")}> Buy Silver</button>
        </div>
    <div className="divider divider-horizontal">OR</div>
    <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
    <h1 className='font-bold text-3xl'>Gold Membership</h1>
    <ul>
    <li> - Chat with other people</li>
            <li> - infinite connection requests per day </li>
            <li> - blue tick</li>
            <li> - 6 months</li>
            </ul>
            <button className='btn btn-primary' onClick={() => handleBuyClick("gold")}> Buy Gold</button>
        </div>
  </div>
  </div>
  )
}

export default Payment
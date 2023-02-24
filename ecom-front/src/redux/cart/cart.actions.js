import axios from 'axios';
import { useSelector } from 'react-redux';
import {
  CART_ADD_PRODUCT,
  CART_GET_PRODUCT,
  CART_PRODUCT_ERROR,
  CART_PRODUCT_LOADING,
  USER_PRODUCTS_BOUGHT,
} from './cart.type';
let url = 'http://localhost:8080';
export const getCart = () => async (dispatch, state) => {
  try {
    let x = localStorage.getItem('token');
    console.log(x);
    const getDataCart = await axios.post(url + '/cart/getAll', {
      token: x,
    });
    console.log(getDataCart);

    dispatch({ type: CART_GET_PRODUCT, payload: getDataCart.data });
  } catch (er) {
    dispatch({ type: CART_PRODUCT_ERROR });
    console.log(er.message);
  }
};

export const addToCart = (id) => async (dispatch, state) => {
  const obj = {
    token: localStorage.getItem('token'),
    productId: id,
    quantity: 1,
  };
  try {
    dispatch({ type: CART_PRODUCT_LOADING });
    await axios.post(url + '/cart/', obj);
    dispatch({ type: CART_ADD_PRODUCT });
  } catch (er) {
    dispatch({ type: CART_PRODUCT_ERROR });
  }
};

export const DeleteProd = (item) => async (dispatch, state) => {
  try {
    dispatch({ type: CART_PRODUCT_LOADING });
    await axios.delete(url + `/cart/${item._id}`, {
      productId: item.product._id,
    });
    dispatch({ type: CART_ADD_PRODUCT });
  } catch (er) {
    return dispatch({ type: CART_PRODUCT_ERROR });
    console.log(er.message);
  }
};

export const getOrders = () => async (dispatch, state) => {
  try {
    let token = localStorage.getItem('token');
    console.log(token, 'this');
    if (!token) {
      return;
    }
    dispatch({ type: CART_PRODUCT_LOADING });
    const orderedProducts = await axios.post(
      'http://localhost:8080/payment/get-orders',
      {
        token: localStorage.getItem('token'),
      }
    );
    let filtered = [];
    for (let i = 0; i < orderedProducts.data.length; i++) {
      filtered.push(...orderedProducts.data[i].orders);
    }
    console.log(filtered, 'from filtererd');
    dispatch({ type: USER_PRODUCTS_BOUGHT, payload: filtered });
  } catch (er) {
    dispatch({ type: CART_PRODUCT_ERROR });
    console.log(`error from cart->${er.message}`);
  }
};

//single
export const HandleSinglePay = (data) => {
  console.log(data, 'battledown1@ybl');
  const script = document.createElement('script');
  script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  script.onerror = () => {
    alert('RazorPay SDK failed to load');
  };
  script.onload = async () => {
    try {
      const result = await axios.post(url + '/payment/create-order', {
        amount: 20 + '00',
      });

      const { amount, id: orderId, currency } = result.data.order;
      console.log(result.data, 'from handle pay ');

      const getkey = await axios.get(url + '/payment/get-razorpay-key');
      const key = getkey.data;
      console.log(key.key, 'second console inside handlepay');
      const options = {
        key: key.key,
        amount: amount.toString(),
        currency: currency,
        name: 'ECOM An Online Store ',
        description: 'FIRST RAZOR PAY',
        order_id: orderId,
        handler: async function (response) {
          const result = await axios.post(url + '/payment/pay-order/single', {
            amount: amount,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpay0rderId: response.razorpay_order_id,
            razorpaysighature: response.razorpay_signature,
            token: localStorage.getItem('token'),
            single: data,
          });

          alert('Ordered Successfully Placed');
        },
        prefill: {
          name: 'ECOM ecommorce store',
          email: 'nayanph1@gmail.com',
          contact: '9481574558',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (er) {
      alert(er);
    }
  };
  document.body.appendChild(script);
};

const cart = ["shoes", "t-shirt", "pants"];

const res = createOrder(cart);

res
  .then(function (orderId) {
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (resolve, reject) {
    console.log(resolve);
  });

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    const orderId = "123456";
    if (orderId) {
      setTimeout(function () {
        resolve(`The order Id is ${orderId}`);
      }, 4000);
    } else {
      reject("Facing some issue while creating Order");
    }
  });
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    let paymentId = "abc";
    if (paymentId) {
      resolve(`Payment Id is ${paymentId}`);
    } else {
      reject(`Some issue is payment`);
    }
  });
}

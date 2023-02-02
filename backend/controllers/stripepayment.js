const stripe = require("stripe")("sk_test_51MSHV5SDvcCFKL2dChZVHrng0Qz5NP1PjWRRTEO0vU4MB0hXbsouJLgWojSiV7XSYBKt4vbIfW6Saphppyf4alv900q1VuK6hC");
const uuid = require("uuid/v4");



exports.makepayment = (req, res) => {
  const { products, token } = req.body
  console.log("PRODUCTS ", products)

  let amount = 0
  products.map(p => {
    amount = amount + p.price;
  });

  const idempotencyKey = uuid()

  return stripe.customers.create({
    email: token.email,
    source: token.id
  }).then(customer => {
    stripe.charges.create({
      amount: amount * 100,
      currency: 'inr',
      customer: customer.id,
      receipt_email: token.email,
      description: "a test account",
      shipping: {
        name: token.card.name,
        address: {
          line1: token.card.address_line1,
          line2: token.card.address_line2,
          city: token.card.address_city,
          country: token.card.address_country,
          postal_code: token.card.address_zip



        }
      }
    }, { idempotencyKey })
      .then(result => res.status(200).json(result))
      .catch(err => console.log(err));
  });

}
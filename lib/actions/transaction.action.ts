"use server";

import Stripe from "stripe";

export async function checkoutCart(transaction: any) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const amount = Number(transaction.amount) * 100;

  const session = await stripe.checkout.sessions.create({
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['US', 'GB'],
    },
    line_items: [
      {
        price_data: {
          currency: 'gbp',
          unit_amount: amount,
          product_data: {
            name: "Unique Expressions Hair Studio",
          },
        },
        quantity: 1
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/account/orders`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
  });

  // Instead of redirect(), return the URL
  return { url: session.url };
}

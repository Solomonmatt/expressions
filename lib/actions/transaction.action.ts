"use server";

import { redirect } from 'next/navigation'
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
            name: "Unique Hairs - Purchase",
          },
        },
        quantity: 1
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/account/orders`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
  })

  redirect(session.url!)
}

// export async function createTransaction(transaction: CreateTransactionParams) {
//   try {
//     await connectToDatabase();

//     // Create a new transaction with a buyerId
//     const newTransaction = await Transaction.create({
//       ...transaction, buyer: transaction.buyerId
//     })

//     await updateCredits(transaction.buyerId, transaction.credits);

//     return JSON.parse(JSON.stringify(newTransaction));
//   } catch (error) {
//     handleError(error)
//   }
// }

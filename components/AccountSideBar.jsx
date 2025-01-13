"use client";

import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'

const AccountSideBar = () => {
  return (
    <div className="wrap-sidebar-account">
      <ul className="my-account-nav">
        <li>
          <Link href="/account/" className="my-account-nav-item active">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/account/orders" className="my-account-nav-item">
            Orders
          </Link>
        </li>
        <li>
          <Link href="/account/address" className="my-account-nav-item">
            Address
          </Link>
        </li>
        <li>
          <Link href="/account/edit" className="my-account-nav-item">
            Account Details
          </Link>
        </li>
        <li>
          <SignOutButton>
            <span className="my-account-nav-item cursor-pointer">Logout</span>
          </SignOutButton>
        </li>
      </ul>
    </div>
  );
}

export default AccountSideBar
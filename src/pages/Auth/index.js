import React from 'react'
import Progress from '../../components/Progress'
import { Route, Routes, Navigate } from 'react-router-dom'
import Account from './Account'
import Login from './Login'
import AccountType from './AccountType'

export default function Auth() {
  
  return (
    <section className='flex'>
      <section className='hidden md:h-screen md:sticky md:top-0 md:block md:w-30 md:p-10 md:text-white animation'>
        <section className='h-100 md:flex md:flex-col md:justify-between'>
          <section>
            <img src='/assets/prospa-logo2.svg' className='block mb-12' alt='prospa-logo' />
            <section className='flex justify-between mb-8'>
              <Progress />
              <Progress />
              <Progress />
              <Progress />
              <Progress />
            </section>
            <section>
              <h2 className='mb-6 font-bold'>Create multiple <br /> sub-accounts</h2>
              <p className='font-light'>Organise your business finances easily
                with multiple accounts. No limits!</p>
            </section>
          </section>

          <img src="/assets/cryptoIcon2.png" className='block w-80' alt="crypto-img" />

          <span className='block'>© 2020 Prospa Inc</span>
        </section>
      </section>
      <section className='md:w-70 p-6 md:p-10'>
        <Routes>
          <Route path="/" element={<Navigate to="account" />} />
          <Route path="account" element={<Account />} />
          <Route path="account-type" element={<AccountType />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </section>
    </section>
  )
}

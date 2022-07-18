import React from 'react';
import Button from '../../components/Form/Button'
import DashboardProgress from '../../components/DashboardProgress';
import MainChart from '../../components/MainChart';

export default function Dashboard() {
  return (
    <>
      <section className='flex flex-col md:flex-row justify-between mb-8'>
        <section className='md:w-70 mb-4'>
          <h2 className='font-normal text-24px'>Welcome back, Kathy</h2>
          <p className='font-normal text-16px'>Here’s what has been happening in the last <span className='text-pink-light'>7 days</span></p>
        </section>
        <section className='w-70 md:w-20'>
          <Button title="Add a sub account" className="bg-pink-light py-3" />
        </section>
      </section>

      <section className="grid md:grid-cols-2 gap-4 md:gap-8 mb-8">
        <section className="bg-white shadow-lg p-4 rounded-md h-170px flex flex-col justify-between">
          <section className='flex justify-between items-center'>
            <section className='font-normal'>
              <h3 className='mb-1 text-xs'>CURRENT ACCOUNT</h3>
              <h4 className='text-text-color text-xs'>PROVIDUS BANK - 9906533917</h4>
            </section>
            <img src="/assets/currentAccount.svg" alt='currentAccount' />
          </section>
          <h3 className='font-normal text-3xl'>N814,800.<span className='text-lg'>45</span></h3>
        </section>
        <section className="bg-white shadow-lg p-4 rounded-md h-170px flex flex-col justify-between">
          <section className='flex justify-between items-center'>
            <section className='font-normal'>
              <h3 className='mb-1 text-xs'>SAVINGS ACCOUNT</h3>
              <h4 className='text-text-color text-xs'>SUB ACCOUNT - 12346789</h4>
            </section>
            <img src="/assets/currentAccount.svg" alt='currentAccount' />
          </section>
          <h3 className='font-normal text-3xl'>N39,342.<span className='text-lg'>45</span></h3>
        </section>
      </section>

      <section className="flex flex-col md:flex-row md:justify-between md:items-stretch">
        <section className="md:w-60 bg-white shadow-lg p-4 md:p-8 rounded-md flex flex-col justify-between mb-8 md:mb-0 min-h-400px">
          <h2 className='text-lg mb-4'>June summary</h2>
          <section className='grid md:grid-cols-4 gap-4 mb-6 font-normal'>
            <section>
              <h3 className='text-sm text-text-color'>Money in</h3>
              <h3 className='text-sm'>N 5,650,000</h3>
            </section>
            <section>
              <h3 className='text-sm text-text-color'>Money out</h3>
              <h3 className='text-sm'>N 5,650,000</h3>
            </section>
            <section>
              <h3 className='text-sm text-text-color'>Difference</h3>
              <h3 className='text-sm'>N 5,650,000</h3>
            </section>

          </section>
          <section>
            <MainChart />
          </section>

        </section>
        <section className="md:w-35 bg-white shadow-lg p-4 md:p-8 rounded-md flex flex-col justify-between min-h-400px">
          <h2 className='text-lg'>Cash outflow</h2>
          
            <section className='flex justify-between'>
              <section className='flex items-center'>
                <img src="/assets/bank.svg" alt="bank" className='w-24px h-24-px mr-4' />
                <span className='text-text-color'>Bank Fees</span>
              </section>
              <section className='w-50'>
                <DashboardProgress amount="- N 250,000" percentage={70} />
              </section>
            </section>
            <section className='flex justify-between'>
              <section className='flex items-center'>
                <img src="/assets/internet.svg" alt="internet" className='w-24px h-24-px mr-4' />
                <span className='text-text-color'>Internet</span>
              </section>
              <section className='w-50'>
                <DashboardProgress amount="- N 250,000" percentage={60} />
              </section>
            </section>
            <section className='flex justify-between'>
              <section className='flex items-center'>
                <img src="/assets/marketing.svg" alt="marketing" className='w-24px h-24-px mr-4' />
                <span className='text-text-color'>Marketing</span>
              </section>
              <section className='w-50'>
                <DashboardProgress amount="- N 250,000" percentage={50} />
              </section>
            </section>
            <section className='flex justify-between'>
              <section className='flex items-center'>
                <img src="/assets/transfer.svg" alt="transfer" className='w-24px h-24-px mr-4' />
                <span className='text-text-color'>Transfer</span>
              </section>
              <section className='w-50'>
                <DashboardProgress amount="- N 250,000" percentage={40} />
              </section>
            </section>
          </section>

       
      </section>
    </>
  )
}

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Form/Button'
import Radio from '../../components/Form/Radio'

export default function AccountType() {
    const navigate = useNavigate()
    const [accountType, setAccountType] = useState("")

    const handleChange = (e) => setAccountType(e.target.value)

    const isSelected = (value) => value === accountType

    const handleSubmit = () => {
        navigate("/login", { replace: true });
    }

    return (
        <section>
            <section className='flex justify-between items-center mb-6'>
                <Link to="/account">
                    <img src="/assets/backIcon.svg" className='cursor-pointer' alt="back-button" />
                </Link>
                <p className='font-medium'>Already a member? <Link to="/account" className='text-pink-light'>Sign In</Link></p>
            </section>

            <section className='flex flex-col items-center'>
                <section className='w-100 max-w-376px'>
                    <section className='mb-8'>
                        <h2 className='mb-2 font-semibold'>Open a new business account</h2>
                        <p className='text-text-color'>A short description comes here</p>
                    </section>
                    <fieldset>
                        <div className={`flex items-baseline mb-4 p-8 rounded ${isSelected("businessRegistered") ? 'border border-pink-light' : 'shadow-xl '}`}>
                            <Radio handleChange={handleChange} checked={isSelected("businessRegistered")} name="accountType" value="businessRegistered" />
                            <section className='ml-6'>
                                <label htmlFor="businessRegistered" className="block text-lg font-normal text-gray-900 dark:text-gray-300">
                                    I have a registered business /<br />
                                    charity with CAC
                                </label>

                                {isSelected("businessRegistered") && <section>
                                    <p className='font-light text-sm text-text-color'>As a registered business you’ll get:</p>
                                    <ul className='mt-4 space-y-4 text-text-color text-sm'>
                                        <ol className='flex items-center'>
                                            <img className='mr-4' src='/assets/goodIcon.svg' alt='good' />
                                            <span>Account in your business name</span>
                                        </ol>
                                        <ol className='flex items-center'>
                                            <img className='mr-4' src='/assets/goodIcon.svg' alt='good' />
                                            <span>Send to and receive transfers from all
                                                Nigerian banks</span>
                                        </ol>
                                        <ol className='flex items-center'>
                                            <img className='mr-4' src='/assets/goodIcon.svg' alt='good' />
                                            <span>Tools for business management</span>
                                        </ol>
                                    </ul>
                                </section>}


                            </section>

                        </div>

                        <div className={`flex items-baseline mb-4 p-8 rounded ${isSelected("businessNotRegistered") ? 'border border-pink-light' : 'shadow-xl '}`}>
                            <Radio handleChange={handleChange} checked={isSelected("businessNotRegistered")} name="accountType" value="businessNotRegistered" />
                            <section className='ml-6'>
                                <label htmlFor="businessNotRegistered" className="block text-lg font-normal text-gray-900 dark:text-gray-300">
                                    My business is not yet registered,<br />
                                    I would like to register
                                </label>
                                {isSelected("businessNotRegistered") && <section>
                                    <p className='font-light text-sm text-text-color'>Everything you need to start your business</p>
                                    <ul className='mt-4 space-y-4 text-text-color text-sm'>
                                        <ol className='flex items-center'>
                                            <img className='mr-4' src='/assets/goodIcon.svg' alt='good' />
                                            <span>Registered business name with the CAC</span>
                                        </ol>
                                        <ol className='flex items-center'>
                                            <img className='mr-4' src='/assets/goodIcon.svg' alt='good' />
                                            <span>Tax identification number</span>
                                        </ol>
                                        <ol className='flex items-center'>
                                            <img className='mr-4' src='/assets/goodIcon.svg' alt='good' />
                                            <span>Your account will be automatically
                                                opened on completion</span>
                                        </ol>
                                    </ul>
                                </section>}


                            </section>
                        </div>

                        <div className={`flex items-baseline mb-4 p-8 rounded ${isSelected("personalBusiness") ? 'border border-pink-light' : 'shadow-xl '}`}>
                            <Radio handleChange={handleChange} checked={isSelected("personalBusiness")} name="accountType" value="personalBusiness" />

                            <section className='ml-6'>
                                <label htmlFor="personalBusiness" className="block text-lg font-normal text-gray-900 dark:text-gray-300">
                                    I’m a freelancer I do business in
                                    my personal name
                                </label>
                            </section>
                        </div>

                    </fieldset>

                    <Button disable={!accountType} title='Next' onClick={handleSubmit} />
                </section>
            </section >
        </section >
    )
}

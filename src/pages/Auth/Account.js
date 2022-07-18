import React, { useState } from 'react'
import Input from "../../components/Form/Input"
import Button from '../../components/Form/Button'
import Select from '../../components/Form/Select'
import { codes } from '../../constants'
import { Link, useNavigate } from 'react-router-dom'

export default function Account() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ first_name: '', last_name: '', mobile: '', email: '', code: '+234' })
    const [disabled, setDisabled] = useState(true)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setDisabled(isDisabled())
    }

    const isDisabled = () => !formData.first_name || !formData.last_name || !formData.email || !formData.code || !formData.mobile

    const handleSubmit = () => {
        navigate("/account-type", { replace: true });
    }
    return (
        <section className='h-screen'>
            <p className='text-right font-medium'>Already a member? <Link to="/login" className='text-pink-light'>Sign In</Link></p>
            <section className='w-100 max-w-376px h-100 m-auto '>
                <section className='h-full flex flex-col justify-center'>
                    <section className='mb-8'>
                        <h2 className='mb-2 font-semibold'>Create your account</h2>
                        <p className='text-text-color'>A short description about account types</p>
                    </section>
                    <section>
                        <Input onChange={handleChange} name='first_name' placeholder='First name' value={formData.first_name} />
                        <Input onChange={handleChange} name='last_name' placeholder='Last name' value={formData.last_name} />
                        <section className='flex justify-between'>
                            <section className='w-30'>
                                <Select onChange={handleChange} options={codes.map((code) => code.code)} name='code' placeholder='Country' value={formData.code} />
                            </section>
                            <section className='w-65'>
                                <Input onChange={handleChange} name='mobile' placeholder='Mobile number' value={formData.mobile} />
                            </section>
                        </section>
                        <Input onChange={handleChange} name='email' placeholder='Email Address' value={formData.email} />
                        <Button disable={disabled} title='Next' onClick={handleSubmit} />
                    </section>

                </section>

            </section>
        </section>
    )
}

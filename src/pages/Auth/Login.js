import React, { useState } from 'react'
import Input from "../../components/Form/Input"
import Button from '../../components/Form/Button'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ password: '', email: '' })
    const [disabled, setDisabled] = useState(true)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setDisabled(isDisabled())
    }
    const isDisabled = () => !formData.email || !formData.password

    const handleSubmit = () => {
        navigate("/dashboard", { replace: true });
    }
    return (
        <section className='h-screen'>
            <p className='text-right font-medium'>Don’t have an account? <Link to="/account" className='text-pink-light'>Sign Up</Link></p>
            <section className='w-100 max-w-376px h-full m-auto'>
                <section className='h-full flex flex-col justify-center'>
                    <section className='mb-8'>
                        <h2 className='mb-2 font-semibold'>Welcome back to Prospa</h2>
                        <p className='text-text-color'>An account, with powerful, personalised tools
                            all in one place</p>
                    </section>
                    <section>
                        <Input name='email' placeholder='Email address' value={formData.email} onChange={handleChange} />
                        <Input name='password' value={formData.password} placeholder='Enter password' onChange={handleChange} />
                        <Button title='Next' disable={disabled} onClick={handleSubmit} />
                    </section>
                </section>

            </section>
        </section>
    )
}

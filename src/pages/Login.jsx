import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)


    // const { signIn, signInGoogle } = useAuthGlobally();
    const navigate = useNavigate();
    const location = useLocation();
    console.log("login page", location)
    const from = location.state?.from?.pathname || "/"

    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handelGoogle = () => {
        signInGoogle()
            .then((result) => {
                const google = result.user;
                console.log(google)
                navigate(from)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <main className='flex items-center justify-center w-full md:h-[91.9vh] bg-[#1b1e34] px-3 '>
            <Helmet>
                <title>MyPhotography | Login</title>
            </Helmet>
            <div className='max-w-[1240px] w-full mx-auto mt-10 grid  md:grid-cols-2 gap-5 md:gap-0 py-5'>
                <div className='flex items-center justify-center bg-[#ffffff]  rounded-s-md p-3 '>
                    <div className='text-center bg-[#ffffff]  rounded-s-md px-3 '>
                        <h1 className='my-5 text-2xl font-bold '>
                            Welcome to the <br /> MyPhotography Learning Portal</h1>
                        <p className='mb-5 text-lg'>If you’re not a registered student, please click the button below to sign up and gain instant access to our range of award-winning photography courses.</p>
                        <Link className='px-10 py-2 font-semibold text-white bg-black rounded-md' to="/">Home</Link>
                    </div>
                </div>
                <div className='bg-black border-2 border-[#4c5696] rounded-e-md'>
                    <h1 className='my-5 text-5xl font-bold text-center text-white'>Please Login</h1>
                    <div className=' text-center py-5 rounded md:w-[500px] mx-auto my-5'>
                        <form onSubmit={handleSubmit}>
                            <input className='w-[80%] py-2 my-5 rounded outline-none px-4 ' type="email" name="email" placeholder='    enter your email' required />

                            <div className='relative'>
                                <input type={showPassword ? "text" : "password"} name="password" id="password" className='border-b-2 w-[80%] rounded py-2 px-4 outline-none text-base ' autoComplete='off' placeholder='   enter your password' />
                                <span className='absolute md:top-3 md:right-14 top-3 right-11'>
                                    {
                                        showPassword ? <AiFillEyeInvisible className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <AiFillEye className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                                    }
                                </span>
                            </div>

                            <p className='mt-5 text-white underline'><Link>Forget Password</Link></p>
                            <button className='w-[80%]  bg-[#4c5696]  mx-auto rounded py-2 my-5 text-white font-semibold flex items-center justify-center'>Login <span><CiLogin className='w-8 h-8 ' /></span> </button>

                            <p className='text-lg text-red-600'>{error}</p>

                            <p className='my-5 text-white'> Create a new account?<Link to="/register" className='text-[#4c5696] underline'> Registration</Link></p>
                        </form>
                    </div>
                    <button onClick={handelGoogle} className='p-[10px] border rounded flex justify-center items-center gap-[6px] mx-auto mb-10  '><FcGoogle className='text-[32px]' /><span className='text-white'>Continue with Google</span></button>
                </div>
            </div>
        </main>
    );
};

export default Login;
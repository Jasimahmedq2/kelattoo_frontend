import { useState } from "react";
import loginImage from "../../assets/login.svg";
import { useForm, useWatch } from 'react-hook-form';
import { Link } from "react-router-dom";


const Login = () => {

    const { handleSubmit, register, control } = useForm();
    const password = useWatch({ control, name: "password" });
    const [disabled, setDisabled] = useState(true);
    const [isError, setIsError] = useState();



    const handleGoogleLogin = () => {

    };

    const handleFromSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };

        console.log('name, email, password:', data.name, data.email, data.password);
    };



    return (
        <div className='min-h-[calc(100vh-2rem)] flex items-center gap-4 bg-[#000000] text-white'>
            <div className='w-1/2 hidden md:block'>
                <img src={loginImage} className='h-full w-full' alt='Sign-Up-Image' />
            </div>
            <div className='w-full md:w-1/2 grid place-items-center'>
                <div className='bg-[#FFFAF4] text-gray-800  grid place-items-center p-10 w-full rounded-2xl border border-[#7B71B0]'>
                    <h1 className='mb-2 font-bold text-4xl'>Sign In</h1>

                    <div className='space-y-1'>
                        {/* <form onSubmit={(handleSubmit(onSubmit))}> */}
                        <form onSubmit={(e) => handleFromSubmit(e)}>
                            <div className='flex flex-col items-start'>
                                <label htmlFor='name' className='pt-2'>
                                    Name
                                </label>
                                <input
                                    className="p-2 border border-[#7B71B0] rounded-md"
                                    type='text'
                                    id='name'
                                // {...register("name")}
                                />
                            </div>
                            <div className='flex flex-col items-start'>
                                <label htmlFor='email' className='pt-2'>
                                    Email
                                </label>
                                <input
                                    className="p-2 border border-[#7B71B0] rounded-md"
                                    type='email'
                                    id='email'
                                // {...register("email")}
                                />
                            </div>

                            <div className='flex flex-col items-start'>
                                <label htmlFor='password' className='pt-2'>
                                    Password
                                </label>
                                <input
                                    className="p-2 border border-[#7B71B0] rounded-md"
                                    type='password'
                                    id='password'
                                // {...register("password")}
                                />
                            </div>
                            <div className='flex flex-col items-start text-xs text-red-700'>
                                <p className='pt-2'                             >
                                    {
                                        isError ?
                                            <span>

                                            </span>
                                            :
                                            <span
                                                className="invisible"
                                            >
                                                &quot;wrong-password.&quot;
                                            </span>
                                    }
                                </p>
                            </div>
                            <div className=''>
                                <button
                                    type='submit'
                                    className='font-bold text-white py-3 rounded-md bg-[#000000] w-full disabled:bg-gray-300 disabled:cursor-not-allowed'
                                // disabled={disabled}
                                >
                                    Sign In
                                </button>
                            </div>

                        </form>
                        {/* <div className=''>
                            <button
                                type='submit'
                                className='font-bold text-white py-3 mt-5 rounded-md  bg-[#000000] w-full disabled:bg-gray-300 disabled:cursor-not-allowed'
                                // disabled={disabled}
                                onClick={handleGoogleLogin}
                            >
                                Sign In With Google
                            </button>
                        </div> */}
                        <div>
                            <p className="text-xs">
                                Don&apos;t have an accoount?{" "}
                                <br />
                                <Link to="/sign-up"
                                    className='text-primary hover:underline cursor-pointer bg-gray-100'
                                >
                                    Sign-Up
                                </Link>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
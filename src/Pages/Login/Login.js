
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm()


    if (user) {
        console.log(user);
    }

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("firstName", { required: true })}
                            aria-invalid={errors.firstName ? "true" : "false"}
                        />
                        {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}

                        <input
                            {...register("mail", { required: "Email Address is required" })}
                            aria-invalid={errors.mail ? "true" : "false"}
                        />
                        {errors.mail && <p role="alert">{errors.mail?.message}</p>}

                        <input type="submit" />
                    </form>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;

//apatoto google sing in form ta niye aste parsi ok

//https://react-hook-form.com/get-started  install korlam
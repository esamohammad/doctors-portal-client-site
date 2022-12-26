import React from 'react';
import { useForm } from "react-hook-form";

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = async data => {
        console.log('data', data);

    }

    return (
        <div>
            <h2 className='text-2xl'>Add a Doctor.</h2>


            <div> <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Name</span>

                    </label>

                    <input
                        type="text" placeholder="Doctor`s Name" className="input input-bordered w-full max-w-xs"

                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />

                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>

                    </label>

                    <input
                        type="email" placeholder="Doctor`s Email" className="input input-bordered w-full max-w-xs"

                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },

                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />

                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Doctor`s Specialty"
                        className="input input-bordered w-full max-w-xs"
                        {...register("specialty", {
                            required: {
                                value: true,
                                message: 'Specialization is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>


                <input className='btn w-full max-w-xs' type="submit" value="ADD" />
            </form></div>
        </div>
    );
};

export default AddDoctor;
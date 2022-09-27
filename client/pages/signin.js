/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import Layout from '../components/Layout';
import Modal from '../components/Modal';
import { getError } from '../utils/getError';

import splitframe from '../public/signin/frame2.png';

const SignInScreen = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      router.push('/productlist');
    }
  }, [router, session]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Sign In">
      <div className="lg:flex justify-between items-center mt-14">
        <div className="hidden lg:block min-w-[600px]">
          <Image
            src={splitframe}
            alt="Split screen frame"
            width={600}
            height={600}
            layout="responsive"
          />
        </div>

        <div>
          <div className="py-12 m-auto">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold mb-6 lg:text-left lg:pl-9">
                Sign In
              </h1>
              <p className="px-10 mb-8">
                Log in with your data that you entered during registration
              </p>
            </div>

            <form
              className="mx-auto max-w-screen-md px-9"
              onSubmit={handleSubmit(submitHandler)}
            >
              <div className="mb-6">
                <label htmlFor="email" className="font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Please enter email',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: 'Please enter valid email',
                    },
                  })}
                  className="form-field mt-1"
                  id="email"
                  autoFocus
                ></input>
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <input
                  type="password"
                  {...register('password', {
                    required: 'Please enter password',
                    minLength: {
                      value: 6,
                      message: 'Password is more than 6 characters',
                    },
                  })}
                  className="form-field mt-1"
                  id="password"
                  autoFocus
                ></input>
                {errors.password && (
                  <div className="text-red-500">{errors.password.message}</div>
                )}
              </div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="rounded-md text-lg mr-1 shadow-md"
                  ></input>
                  <label
                    for="remember"
                    className="inline-block relative bottom-[0.6px]"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  className="text-sky-500 font-medium hover:cursor-pointer"
                  onClick={() => setOpen(true)}
                >
                  Forgot your password?
                </a>
                <Modal
                  onClose={() => {
                    setOpen(false);
                    console.log(open);
                  }}
                  open={open}
                />
              </div>
              <button className="primary-button block px-5 py-2.5">
                Sign In
              </button>
            </form>
            <Link href="/signup">
              <a className="mt-8 block text-center text-sky-500">
                Don&apos;t have an account yet?{' '}
                <span className="text-sky-700">Sign Up</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignInScreen;

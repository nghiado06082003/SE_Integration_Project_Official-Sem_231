import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex flex-grow p-10 justify-center bg-blue-100">
        <div className="w-full max-w-sm p-4 bg-blue-300 border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
      <form className="space-y-6 " action="#" >
        <div className='flex justify-center'><h5 className="text-2xl font-bold text-gray-900 dark:text-white">Đăng nhập</h5> <br></br></div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Đăng nhập vào tài khoản
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-100">
          Not registered? <a href="/sign-up" className="text-blue-700 hover:underline ">Đăng ký</a>
        </div>
      </form>
    </div>
    </div>

  );
};

export default LoginForm;

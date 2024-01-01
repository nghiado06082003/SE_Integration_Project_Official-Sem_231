/**
 * trang cá nhân người dùng gồm thông tin cá nhân như mssv, họ và tên, avatar thì hardcode, ...
 * thống kê số lượng yêu cầu mượn sách/ số lượng sách đang mượn, ấn vào nó sẽ ra trang chi tiết
 * trang chi tiết này gồm 2 bảng: 1 bảng là thông tin sách đang mượn, 1 bảng là những yêu cầu mượn trước đó
 * ở dưới sẽ có những thống kê như số lượng sách viết đã quyên góp, ấn vào nó sẽ hiện danh sách
 * số lượng bài review/topic đã tạo, ấn vào nó sẽ hiện danh sách, ấn vào 1 dòng trong danh sách nó sẽ ra cái bài review/topic chi tiết trong forum
 */
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Cookies from 'universal-cookie';
// import axios from "axios";

export default function Profile() {
  // const [user, setUser] = useState(null);
  // const cookies = new Cookies();
  
  // useEffect(() => {
  //   const token = cookies.get("TOKEN");
  //   const info = cookies.get("info");
  //   if (!token || !info) {
  //     setUser(null);
  //     cookies.remove("TOKEN", { path: "/" });
  //     cookies.remove("info", { path: "/" });
  //     window.location.assign('/');
  //   } else {
  //     setUser(info);
  //   }
  //   axios.get()
  // }, []);
  
  return (
    <div className='flex flex-grow justify-center '>
      <div className='flex flex-row gap-20'>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100 border border-gray-300 px-10 rounded-xl bg-blue-100">
            <div class="py-8 px-8 max-w-sm bg-blue-100 rounded-xl  space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                  <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face"/>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className=" font-medium leading-6 text-blue-700">Họ và Tên: </dt>
              <dd className="mt-1  leading-6 text-blue-500 sm:col-span-2 sm:mt-0">Nguyễn Văn A</dd>
              
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className=" font-medium leading-6 text-blue-700">MSSV: </dt>
              <dd className="mt-1  leading-6 text-blue-500 sm:col-span-2 sm:mt-0">2110000</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className=" font-medium leading-6 text-blue-700">Email: </dt>
              <dd className="mt-1  leading-6 text-blue-500 sm:col-span-2 sm:mt-0">abc@hcmut.edu.vn</dd>
            </div>
            {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className=" font-medium leading-6 text-blue-700">Số sách đã quyên góp: </dt>
              <Link to="#"><dd className="mt-1  leading-6 text-blue-500 sm:col-span-2 sm:mt-0">1 <span className='text-blue-300'>(Click để xem chi tiết)</span></dd></Link>
            </div> */}
            {/*Not developed yet*/}
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className=" font-medium leading-6 text-blue-700">Sách đang mượn: </dt>
              <Link to="/borrow-history"><dd className="mt-1  leading-6 text-blue-500 sm:col-span-2 sm:mt-0">1 <span className='text-blue-300'>(Click để xem chi tiết)</span></dd></Link>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className=" font-medium leading-6 text-blue-700">Các chủ đề đã tạo: </dt>
              <Link to="/review-history"><dd className="mt-1  leading-6 text-blue-500 sm:col-span-2 sm:mt-0">1 <span className='text-blue-300'>(Click để xem chi tiết)</span></dd></Link>
            </div>
          </dl>
        </div>
      </div>
      
    </div>
  )
}
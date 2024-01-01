import React from "react";
import data from '../forum/reviewdata';
import ReviewCard from "../../../component/Review";
export default function ReviewHistory() {
    return (
        <div className="flex-grow bg-gray-100">
          <div className="flex-grow flex-col items-center justify-center pl-4 pr-4 md:pl-40 md:pr-40 lg:pl-60 lg:60">
            <h1 className="text-3xl font-bold mb-6 flex justify-center text-blue-500 pt-10">Các chủ đề đã tạo</h1>
            <div className="flex flex-col justify-center py-4">
                <ReviewCard data={data}></ReviewCard>
            </div>
            </div>
        </div>
        
    );
}

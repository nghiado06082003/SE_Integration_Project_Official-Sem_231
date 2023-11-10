export default{
    userData: {
        userInfor: {
            student_id: "211xxxx",
            student_name: "Tran Van A",
            email: "abc@hcmut.edu.vn",
            password: "123456",
            status: "Hoạt động",
            join_date: "dd/mm/yyyy",
            permission: "Cộng tác viên"
        },
        userReview:{
            total: 3,
            reviewData: [
                {
                    id: 1,
                    bookName: "Tam quốc diễn nghĩa",
                    author: "author",
                    sendDate: "dd/mm/yyyy",
                    updateDate: "dd/mm/yyyy",
                    status: "Đã duyệt",
                    reviewDescription: "dummy text",
                    clubComment: "good"
                },
                {
                    id: 2,
                    bookName: "Đồi gió hú",
                    author: "author",
                    sendDate: "dd/mm/yyyy",
                    updateDate: null,
                    status: "Đang chờ",
                    reviewDescription: "dummy tex",
                    clubComment: null
                },
                {
                    id: 3,
                    bookName: "Tiếng gọi nơi hoang dã",
                    author: "author",
                    sendDate: "dd/mm/yyyy",
                    updateDate: "dd/mm/yyyy",
                    status: "Từ chối",
                    reviewDescription: "dummy tex",
                    clubComment: "bad"
                }
            ]
        },
        bookDonate: {

        }
    }
}
# SE_Integration_Project_Official-Sem_231
Đây là repository chính thức cho môn Đồ án tồng hợp - hướng Công nghệ phần mềm HK231.

***(Cập nhật đầu tiên 5/11/2023: ReactJS được cài đặt trong thư mục views của project này, các thành viên làm pront-end vui lòng làm trong thư mục views)***

## Setup ngay sau khi clone project lần đầu
Do việc push kèm thư mục node_modules (thư mục chứa các thư viện cho NodeJS và ReactJS) sẽ khiến project trở nên rất nặng (thư mục node_modules của ReactJS có dung lượng loanh quanh 300-400 MB), cũng như git sẽ không thể track được toàn bộ thay đổi.

Do đó, hai thư mục node_modules của NodeJS và ReactJS đã phải được đưa vào .gitignore.

Vì thế, ngay sau khi clone project này về lần đầu tiên, các thành viên vui lòng tiến hành cài đặt lại các thư viện này. Cụ thể như sau:

Với NodeJS, mở terminal và gõ:
```
npm install
```
Các thư viện cần thiết cho NodeJS sẽ được cài đặt.

Với ReactJS cũng tương tự, chỉ cần chuyển vào thư mục views sau đó cài đặt. Gõ hai lệnh sau:
```
cd views
npm install
```
Các thư viện cần thiết cho ReactJS sẽ được cài đặt.

## Khởi chạy web
Sau khi clone project này, mở terminal tại thư mục vừa clone và gõ:
```
npm run dev
```
Trang localhost:3000 sẽ khởi chạy tự động trên trình duyệt mặc định của máy sau vài giây (nếu việc thiết lập thành công)

## Một số thông tin về web
### Công nghệ được sử dụng
- Front-end:
    - HTML + CSS
    - Bootstrap 5 (được cài đặt như là một thư viện trong thư mục node_modules của ReactJS)
    - Javascript
    - jQuery
    - ReactJS
    - Axios (để thực hiện http request trong ReactJS)
- Back-end:
    - Server code: NodeJS v20, ExpressJS
    - Database: MySQL

### Các lưu ý
- Vui lòng cài đặt MySQL lên máy (hoặc sử dụng gói cài đặt tổng hợp XAMPP), nhập file `simbsc.sql` vào để làm database. Do hiện sử dụng localhost để host server database.
- File database này hiện chỉ phục vụ hai module: quản lý tài liệu và mượn sách/tài liệu, do đó hiện chỉ có 3 table documents (đã có dữ liệu), members và borrow (chưa có dữ liệu). Vui lòng thêm dữ liệu vào khi làm. 
- **Hiện tại, trang chưa được hiện thực tính năng đăng nhập đăng ký (sẽ cập nhật sau). Do đó, có lẽ các request cho module mượn sách hiện tại vui lòng gừi thông tin trực tiếp về người dùng lên server đề xử lý**
- Trang web được viết theo mô hình MVC (Model - View - Controller), trong đó phần views sử dụng ReactJS để hiện thực. Các thành viên nên tìm hiểu qua mô hình này, cách triển khai mô hình trên NodeJS để hiện thực theo mô hình này.
- Nếu có đổi database về sau, chỉ cần thay đổi file `connect_db` và các file model đối tượng liên quan trong thư mục `model`. Code hiện tại đã cố gắng chia tách phần model kết nối database này với phần model của từng page trong web nhằm đảm bảo khi hiện thực hoặc đổi database, chỉ cần thay đổi kết nối trong `connect_db` và thay đổi các câu lệnh truy vấn trong các file model đối tượng liên quan, còn API mà các file đối tượng cung cấp ra là không đổi và không cần sửa (tuân thủ tối da bộ quy tắc quan trọng trong lập trình: SOLID)
- Trang web có vài thiết lập liên quan đến bảo mật thông qua các thư viện: `helmet`, `express-rate-limit`.
- Trang web đã cấu hình proxy cho ReactJS để đảm bảo ReactJS và NodeJS server tương tác được (không bị lỗi cors)

Lời cuối, chúc tất cả một ngày tốt lành!

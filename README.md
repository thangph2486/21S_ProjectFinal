# BootCamp_Yellow
## Các quy tắc để tránh gặp conflict khi push code.
1. Các file của App.Component chỉ do người có quyền root chỉnh sửa!
2. Không được tạo module(page) một cách tuỳ tiện (việc tạo do root làm).
3. Các bạn có thể chỉnh sửa trên module mình chịu trách nhiệm. Tuyệt đối! không được chỉnh sửa trên file người khác khi chưa thống nhất.
4. Các bạn có thể tạo component trong riêng từng 'page' của mình.
5. Trước khi đẩy (push) cần lấy về những thay đổi (pull).
6. Mỗi lần pull, chạy lại lệnh 'npm i' để cài những module của người khác(tránh 'ng s' bị lỗi).

## Các lệnh git cần thiết
1. git clone <linkgit>      
2. git add .
3. git commit -m "mess commit"
4. git remote add upstream <link project đã Fork về>
5. git pull upstream master 
6. git push origin master


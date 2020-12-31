# :iphone:  SE04-Nhom20.2   React Native App
*(app thương mại điện tử đặt mua mèo)*

---
## :large_blue_diamond: Mục lục
~~~
1. Giới thiệu
2. Đề tài
3. Mục tiêu
4. Giới thiệu chung
5. Giới thiệu bài toán
6. Phân tích bài toán
7. Thiết kế mô hình ứng dụng
8. Danh sách các chức năng của phần mềm
9. Kết luận
10. Hướng phát triển
~~~

---

## :large_blue_diamond: Giới thiệu
### Công nghệ phần mềm - SE04-Nhom20.2. 
###### - Trường: Đại Học Khoa học Tự Nhiên - Đại học Quốc Gia Hà Nội.
###### - Khoa: Toán - Cơ - Tin học.
### Người hướng dẫn
###### - Thầy: [Bùi Sỹ Nguyên](https://www.facebook.com/nguyenbs).
###### - Anh: [Nguyễn Quan Tuấn](https://www.facebook.com/nguyenquan.tuan.5).

### Thành viên nhóm
###### 1) [Đặng Trung Du](https://www.facebook.com/t.dudang/)
###### 2) [Nguyễn Anh Thư](https://www.facebook.com/profile.php?id=100017848988200)
###### 3) Nguyễn Văn Quyết
###### 4) Nguyễn Tùng Dương
    
## :large_blue_diamond: **Đề tài**
    Tìm hiểu lập trình React Native cho bài toán thương mại.
    
## :large_blue_diamond: **Mục tiêu**
    - Tìm hiểu và làm quen cấu trúc của React Native.
    - Áp dụng vào lập trình ứng dụng React Native cho bài toán thương mại cụ thể.
    
## :large_blue_diamond: **Giới thiệu chung**
        Trong thời đại công nghệ phát triển, việc ứng dụng các mô hình trực tuyến vào các 
    hoạt động giải trí và kinh doanh là vô cùng cần thiết, nhằm bắt kịp với các xu thế mới
    và hiện đại. Hiện nay đã có rất nhiều các mô hình kinh doanh và giải trí đã áp dụng, 
    sử dụng phương thức quản lý, bán hàng và quảng bá hình ảnh sản phẩm thông qua các 
    ứng dụng điện tử. 
        Việc sử dụng công nghệ vào các hoạt động quản lý và lưu trữ dữ liệu là quan trọng 
    hơn cả do tính tiện dụng, an toàn, bảo mật và thân thiện với người dùng.
        Với dữ liệu cần quản lý là rất lớn, không thể thực hiện một cách thủ công, thì việc
    sử dụng một trang web có vai trò như một admin là vô cùng cần thiết, giúp người sở hữu
    dễ dàng thao tác, theo dõi là quản lý dữ liệu nhanh và bảo mật.
        Bên cạnh đó, việc sở hữu các cửa hàng không có tính di động khiến việc quảng bá
    bị hạn chế, chỉ thu hút được khách trong khu vực. Do đó, việc sử dụng một ứng dụng được
    cài trên điện thoại – vật bất ly thân với mọi người hiện nay, là một phương tiện rất tốt
    để có thể quảng bá hình ảnh sản phẩm đi xa hơn.
    
## :large_blue_diamond: **Giới thiệu bài toán**    
    - Để thực hiện hoá hai vấn đề trên, hãy xây dựng một trang web quản lý dành cho Admin và
    một ứng dụng trên điện thoại cho người sử dụng dùng để mua mèo bằng hình thức trực tuyến
    online.
    - Các thành phần của chương trình:
        + Web API: xử lý Business logic cho web admin.
        + Web Admin: trang web quản lý các dữ liệu và tài khoản người dùng.
        + Ứng dụng di động React Native: dành cho đối tượng khách hàng.
    
## :large_blue_diamond: **Phân tích bài toán** 
    Đối với đối tượng là Admin trên nền web:
    - Để truy cập được vào trang web, phải có tài khoản đăng nhập để login/ logout.
    - Có thể xem, kiểm tra thông tin của các sản phẩm (cat) và của người sử dụng (user).
    - Thông tin về cat bao gồm: id, tên, giống, xuất xứ, loại, giá, đặc trưng, số lượng, 
    hình ảnh minh hoạ, hướng dẫn.
    - Thông tin về user bao gồm: id, username (gmail), password, tên, địa chỉ, số điện thoại.
    - Admin có thể thêm, sửa, xoá thông tin của cat.
    - Có thể xem thông tin của các hoá đơn đã đặt.
    
    Đối với đối tượng user trên nền ứng dụng điện thoại:
    - Có thể login/ tạo tài khoản đăng nhập.
    - Xem, đặt hàng sản phẩm.
    - Điền thông tin thanh toán, bao gồm: họ tên, số điện thoại, địa chỉ nhận hàng, ghi chú 
    (tuỳ chọn).
    - Xem được thông tin hàng đã đặt thành công.
    - Mỗi lần đặt thành công, có thể xem được thông tin của mèo đã đặt, bao gồm: Mã mặt hàng, 
    mã đơn thanh toán, tên mèo, số lượng, tổng tiền và thời gian thanh toán.
    
   ### Công nghệ sử dụng
    - Ngôn ngữ lập trình:
        + Back-end: Flask Python.
        + Front-end (Web admin): HTML, CSS, Bootstrap.
        + Framework: React Native.
            React Native là một framework do công ty công nghệ nổi tiếng Facebook phát triển 
        nhằm mục đích giải quyết bài toán hiệu năng của Hybrid và bài toán chi phí khi mà phải
        viết nhiều loại ngôn ngữ native cho từng nền tảng di động. Chúng ta sẽ build được 
        ứng dụng Native đó một cách đa nền tảng (multi-platform) chạy được cả hai hệ sinh thái
        iOS hay Android.
            Hiện nay, framework Flutter đang dần nổi lên và được nhiều nhà lập trình để ý tới,
            tuy nhiên, React native lại có những ưu điểm riêng, vượt trội:
            - Thiên về development/hotfix nhanh (hot reload, bundle injection).
            - Sử dụng JS (quen thuộc với nhiều developer) và có thể share business logic codebase
            với frontend (js).
            - Back bởi Facebook, họ dùng cho product của họ hàng ngày nên developer hưởng lợi khá
            nhiều từ đây.
            - Hiện tại có rất nhiều thư viện, gần như đã rất đầy đủ cho các nhu cầu app thông dụng.
    - Các phần mềm và thư viện sử dụng: Intellij, PyCharm, Flask, MySQL.
    
## :large_blue_diamond: **Thiết kế mô hình ứng dụng** 
    - Sử dụng mô hình 3 tầng: là một loại kiến trúc phần mềm được tạo thnahf bởi 3 tầng, bao gồm: 
    tầng giao dịch (Presentation tier), tầng logic (Logic tier), tầng dữ liệu (data tier).
    - Mô hình ba tầng mang lại rất nhiều lợi ích cho việc sản xuất cũng như phát triển ứng dụng. 
    Nó giúp lập trình viên có thể tạo ra một ứng dụng linh hoạt và dễ dàng sửa chữa, nâng cấp, tái 
    sử dụng.
    
## :large_blue_diamond: **Danh sách các chức năng của phần mềm**
    - Đối với admin:
        - Đăng nhập: sử dụng tài khoản (email và password đã cấp) để đăng nhập. Sau khi đăng nhập 
        thành công, admin có thể thực hiện các thao tác quản lý và chỉnh sửa dữ liệu liên quan.
        - Thêm, sửa, xoá: admin thực hiện update, kiểm tra các dữ liệu.
        - Logout: thoát khỏi tài khoản sau khi hoàn tất các thao tác quản lý.
    - Đối với user:
        - Đăng nhập: sử dụng tài khoản (email và password (đã tự tạo)) để đăng nhập. Sau khi đăng
        nhập thnàh công, khách hàng có thể thực hiện các thao tác tiếp theo.
            + Tạo tài khoản User: tạo tài khoản trên ứng dụng di động (yêu cầu khách hàng nhập 
            thông tin (username, password, name, phone, add)).
            + Quên mật khẩu: trong trường hợp đã có tài khoản nhưng quên mật khẩu thì có thể 
            thay đổi lại mật khẩu (yêu cầu nhập đúng tài khoản và số điện thoại đã đăng ký).
        - Sau khi đăng nhập thành công, danh sách về các sản phẩm (cat) được hiển thị, tối ra một
        list chỉ hiển thị 3 đối tượng cat, sau đó cập nhật thêm dữ liệu khi kéo tới cuối trang 
        => hạn chế việc lấy quá nhiều dữ liệu dẫn tới quá tải server.
        - Thông tin chi tiết về mèo sẽ được hiển thị.
        - Sau khi chọn mua được sản phẩm, KH thực hiện nhập thông tin nhận hàng.
        - Xác nhận mua thành công, lịch sử mua hàng sẽ được hiển thị. KH hoàn tất việc mua hàng,
        có thể quay lại tiếp tục mua hàng.

## :large_blue_diamond: **Kết luận**
    - Trang web dành cho admin đã đáp ứng được yêu cầu cơ bản: xem, thêm, sửa, xoá các thông tin.
    Các luồng xử lý hoạt động ổn định, chức năng thao tác dễ dàng.
    - App React Native hoạt động khá tốt, các giao diện được hiển thị rõ ràng, thông luồng liền
    mạch với nhau, dễ dàng thực hiện các thao tác cơ bản như xem, mua, nhập thông tin,...
    - Tuy nhiên, cả về website dành cho admin và app react native vẫn còn một số hạn chế như 
    chưa validate form hết các trường dữ liệu, việc giao tiếp giữa các tầng chưa thật sự tối ưu,
    giao diện tuy dễ sử dụng nhưng còn đơn giản, chưa bắt mắt.

#### :large_blue_diamond: **Hướng phát triển** 
    Trong tương lại, nhóm em sẽ tiếp tục phát triển để hoàn thiện hơn về cả back-end lẫn front-end,
    cả về web admin và app react native. Tối ưu các chức năng để giảm thiểu thời gian xử lý, 
    phát triển giao diện, tạo thêm các chức năng mới đa dạng hơn. Cải thiện việc giao tiếp giữa các
    tầng để truy vấn nhanh hơn, an toàn và hạn chế ngoại lệ.

#### :small_red_triangle: **React Native App** 


#### :small_red_triangle: **Web API**


#### :small_red_triangle: **Flask Python**


#### :small_red_triangle: **Database MySQL**

---
## :large_blue_diamond: *Tài liệu tham khảo*
1. *React Native (https://reactnative.dev/docs/getting-started)*
2. *Flask (https://flask.palletsprojects.com/en/1.1.x/)*

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
        * Back-end: Flask Python.
            Flask là một web framework, thuộc loại micro-framework được xây dựng bằng 
        ngôn ngữ Python. Flask cho phép xây dựng các ứng dụng web từ đơn giản đến phức tạp;
        có thể xây dựng các API nhỏ, ứng dụng web như các trang blog, wiki hoặc một website
        dựa theo thời gian hay trang web thương mại.
        Flask cung cấp các công cụ, thư viện và công nghệ hỗ trợ để làm những công việc trên.
            Ưu điểm:
                - Là một micro-framework nên Flask là mọt môi trường độc lập, ít sử dụng các 
                thư viện bên ngoài
                - Nhẹ, ít lỗi do ít phụ thuộc cũng như dễ dàng phát hiện và xử lý các lỗi
                bảo mật.
                - Không có ORM, dẽ dàng kết nối với tiện ích mở rộng.
                - Mã ngắn và đơn giản trong số các bộ xương Python khác,cung cấp người dùng 
                phần cốt lõi được sử dụng nhất của khung dữ liệu web như URL routing, request,
                response objject, templates, ...
           Nhược điểm: đôi khi phải tự mìnhcode nhiều hơn hoặc cần tự gọi thêm các tiện ích
           mở rộng.
        * Front-end (Web admin): HTML, CSS, Bootstrap.
        * Framework: React Native.
            React Native là một framework do công ty công nghệ nổi tiếng Facebook phát triển 
        nhằm mục đích giải quyết bài toán hiệu năng của Hybrid và bài toán chi phí khi mà phải
        viết nhiều loại ngôn ngữ native cho từng nền tảng di động. Chúng ta sẽ build được 
        ứng dụng Native đó một cách đa nền tảng (multi-platform) chạy được cả hai hệ sinh thái
        iOS hay Android.
            Hiện nay, framework Flutter đang dần nổi lên và được nhiều nhà lập trình để ý tới,
            tuy nhiên, React native lại có những ưu điểm riêng, vượt trội:
            - Thiên về development/hotfix nhanh (hot reload, bundle injection).
            - Sử dụng JS (quen thuộc với nhiều developer) và có thể share business logic 
            codebase với frontend (js).
            - Back bởi Facebook, họ dùng cho product của họ hàng ngày nên developer hưởng lợi
            khá nhiều từ đây.
            - Hiện tại có rất nhiều thư viện, gần như đã rất đầy đủ cho các nhu cầu app 
            thông dụng.
    - Các phần mềm và thư viện sử dụng: Intellij, PyCharm, Flask, MySQL, ...
    
## :large_blue_diamond: **Thiết kế mô hình ứng dụng** 
    - Sử dụng mô hình 3 tầng: là một loại kiến trúc phần mềm được tạo thành bởi 3 tầng, bao gồm: 
    tầng giao dịch (Presentation tier), tầng logic (Logic tier), tầng dữ liệu (data tier). Đây 
    là một kiến trúc client-server trong đó việc trình bày (presentation), xử lý (process), 
    quản lý dữ liệu (data management) là các quá trình riêng biệt, tạo thành nhiều tầng khác nhau.
    - Mô hình ba tầng mang lại rất nhiều lợi ích cho việc sản xuất cũng như phát triển ứng dụng. 
    Nó giúp lập trình viên có thể tạo ra một ứng dụng linh hoạt và dễ dàng sửa chữa, nâng cấp,
    tái sử dụng.
    - Chức năng từng tầng:
        * Presentation: hiển thị các thnàh phần giao diện để tương tác với người dùng như tiếp
    nhận thông tin, thông báo lỗi, bao gồm các thành phần
        * Business Logic: thực hiện hành vi nghiệp vụ của phần mềm như tính toán, đánh giá tính 
    hợp lệ của thông tin, ... ; di chuyển, xử lý thông tin giữa hai taàng trên dưới.
        * Data: nơi lưu trữ và trích xuất dữ liệu từ các hệ quản trị CSDL hay các file trong 
    hệ thống. Cho phép tầng Business logic thực hiện các truy vấn dữ liệu.
    
## :large_blue_diamond: **Danh sách các chức năng của phần mềm**
    - Đối với web admin:
        1. Đăng nhập: sử dụng tài khoản (email và password đã cấp) để đăng nhập. 
            * Hệ thống kiểm tra thông tin đăng nhập:
                - Bắt buộc phải nhập đầy đủ các trường.
                - Chỉ đăng nhập được với tài khoản đã được cấp.
            * Sau khi bấm Login: nếu tài khoản đăng nhập đúng thì chuyển sang trang tiếp theo.
        2. Thao tác với màn hình User account:
            * Click 'User account', hệ thống hiển thị dữ liệu thông tin các tài khoản KH lên 
        màn hình view cho người dùng admin.
            * Admin chỉ có quyền xem các thông tin người dùng, không được quyền thêm, sửa hoặc
        xoá account.
        3. Thao tác với trang cat information:
            * Admin có quyền xem, tạo mới, sửa hoặc xoá thông tin sản phẩm.
        4. Thao tác trên trang bills:
            * Xem thông tin hoá đơn thanh mua thành công của khách hàng
            * Không có quyền thêm, sửa, xoá các bill.
        5. Logout: thoát khỏi tài khoản sau khi hoàn tất các thao tác quản lý.
        
    - Đối với ứng dụng di động:
        1. Đăng nhập: sử dụng tài khoản (email và password) để đăng nhập.
            * Tạo tài khoản: tạo tài khoản mới trên ứng dụng, yêu cầu khách hàng nhập 
        thông tin (username, password, name, phone, add).
            * Quên mật khẩu: trong trường hợp đã có tài khoản nhưng quên mật khẩu thì có thể 
        thay đổi mật khẩu (yêu cầu nhập đúng tài khoản và số điện thoại đã đăng ký).
        2. Hiển thị danh sách sản phẩm:
            * Sau khi đăng nhập thành công, danh sách về các sản phẩm (cat) được hiển thị, tối đa 
        một list chỉ hiển thị 3 đối tượng cat, sau đó cập nhật thêm dữ liệu khi kéo tới cuối trang.
        3. Hiển thị thông tin chi tiết sản phẩm:
            * Chi tiết sản phẩm bao gồm tên, xuất xứ, giống , nguồn gốc xuất xứ, giá tiền, ...
        4. Lựa chọn số lượng sản phẩm: 
            * Người dùng chọn số lượng mèo muốn mua. Có thể tăng hoặc giảm số lượng, không được 
        giảm đến 0.
            * Số lượng và tổng tiền sẽ được cập nhật và hjiển thị ngay cho KH khi thao tác thay đổi
        số lượng.
        5. Thông tin thanh toán:
            * KH chọn mua sản phẩm, nhập các thông tin các nhân bao gồm tên, địa chỉ, số điện thoại,
        để tiến hành thanh toán.
            * Xác nhận mua thành công, hiển thị lịch sử mua hàng cho người dùng. 
        6. Có thể tiếp tục mua mặt hàng khác sau khi mua xong.
    - API:
        * Là nơi thực hiện các thao tác truy vấn tới database, định tuyến các trang hiển thị lên
        màn hình.
        * Bao gồm: Các package nghiệp vụ:
            1. Entity: chứa các thực thể.
            2. Routes: chứa các định tuyến của chương trình
            3. Services: chứa các file thực hiện các truy vấn tới database. Service package bao gồm
        các file thực thi các câu lệnh truy vấn tới database, với từng đối tượng cụ thể sẽ có các 
        câu lệnh truy vấn khác nhau, rõ ràng. Để an toàn cho dữ liệu, mỗi lần truy vấn tới database,
        service sẽ thực hiện việc mở và ngắt kết nối, để thuận tiện, việc connect sẽ được tách ra 
        một file riêng, khi cần, các việc truy vấn chỉ cần gọi file kết nối và thực thi câu lệnh.
        * Toàn bộ phần code của API đều được viết bằng flask python
        * Các route của web admin hay ứng dụng di động sẽ trỏ tới từng route trong api tuỳ từng mục đích.
        Các url trong api được trỏ tới sẽ thực thi các công việc để trả về kết quả.
        
## :large_blue_diamond: **Thiết kế cơ sở dữ liệu** 
    Các thông tin cần lưu trữ:
        - admin: id (PK), username, password, name, add, phone.
        - cat: id (PK), name, gender, origin, type, price, features, quantity, img, guide.
        - uer: id (PK), username, password, name.
        - bill: id (PK), name, phone, address, note, id_user (FK), id_cat (FK), id_payment (FK).
        - payment: id (PK), id_bill (FK), purchase_date, total_cost.

## :large_blue_diamond: **Kết quả đạt được**
    - Website admin đã đáp ứng được yêu cầu cơ bản của người dùng với các chức năng: hiển thị thông tin 
    tài khoản user, tài khoản admin, hiển thị thông tin danh sách các sản phẩm và hoá đơn người mua.
    Danh sách sản phẩm có thể được thay đổi bao gồm thêm, sửa, xoá. Ứng dụng trên điện thoại di dộng 
    đáp ứng được yêu cầu ban đầu, giao diện bắt mắt, các thoa tác gần như hoàn chỉnh như một ứng dụng
    thương mại thông thường. Dữ liệu được quản lý rõ ràng, Các luồng xử lý hoạt động ổn định, đảm bảo 
    các chức năng hoạt động dễ dàng, không gây bất tiện cho người sử dụng. Việc giao tiếp giữa các
    tầng cơ bản ổn định, cơ sở dữ liệu nhất quán, dữ liệu được thao tác. Giao diện rõ ràng, dễ sử dụng.
    - Tuy nhiên, website và app vẫn còn một số hạn chế nhất định cần tiếp tục cải thiện để hoàn thiện hơn.
    Các chức năng hoạt động ổn định nhưng chưa thật sự tối ưu, API còn đơn giản. Giao diện còn đơn giản,
    chưa bắt mắt, chưa có những tính năng đặc biệt.

## :large_blue_diamond: **Phân task và viết code** 
    1. Công việc chung:
        - Cài đặt các công cụ và môi trường lập trình.
        - Tìm hiểu về Flask Python và React Native.
        - Tìm hiểu về mô hình ứng dụng.
        - Lên danh sach các chức năng cần thực hiện của chương trình (bản sơ bộ).
        - Tạo bản prototype của phần mềm.
        - Thiết kế cơ sở dữ liệu.
    2. Công việc riêng:
        * Đặng Trung Du:
            - Viết API cho admin, user: truy vấn lấy dữ liệu từ db rồi hiển thị lên màn hình.
            - Thiết kế web hiển thị màn hình.
            - Phân tách các chức năng thành các file, package theo từng nghiệp vụ.
            - Thông luồng giữa các route API.
            - Thiết kế giao diện Splash, Login, Forgot password, Create new account.
            - Xử lý dữ liệu màn hình Login: gửi request xuống api để kiểm tra dữ liệu và trả về 
            kết quả.
            - Xử lý dữ liệu màn hình forgot password: gửi request xuống API để cập nhật dữ liệu.
            - Xử lý dữ liệu màn hình create new account: gói dữ liệu người dùng nhập rồi gửi
            request xuống API để lưu trữ thông tin.
        * Nguyễn Anh Thư:
            - Viết API cho bill, cat: truy vấn lấy dữ liệu từ db và hiển thị lên màn hình.
            - Viết API update a cat: lấy dữ liệu từ form người dùng gửi lên API, truy vấn db
            update dữ liệu.
            - Viết API delete a cat: xử lý nút delete, gửi API thực hiện xoá dữ liệu.
            - Viết API create a new cat: xử lý form nhập, gửi request xuống APi, truy vấn db
            lưu trữ dữ liệu.
            - Thiết kế giao diện List of cats, Cat details, Payment, History.
            - Xử lý dữ liệu màn hình List of cats: truy xuất lấy dữ liệu danh sách theo từng
            phần một lượt.
            - Xử lý dữ liệu Cat details: đẩy dữ liệu trang trước sang trang sau.
            - Xử lý Payment: yêu cầu API lưu trữ form thông tin thanh toán.
            - Xử lý History: hiển thị thông tin mua hàng thành công, yêu cầu API lưu dữ diệu
            vào db bill.
            
#### :large_blue_diamond: **Hướng phát triển** 
    Trong tương lại, chúng em sẽ tiếp tục phát triển để hoàn thiện hệ thống hơn. Tối ưu các câu lệnh
    truy vấn và xử lý logic. Cải thiện việc giao tiếp giữa các tầng để hạn chế ngoại lên, cải tiến 
    giao diện bắt mắt và các chức năng đa dạng hơn thuận tiện cho ngươi dùng, …

#### :small_red_triangle: **React Native App** 


#### :small_red_triangle: **Web API**


#### :small_red_triangle: **Flask Python**


#### :small_red_triangle: **Database MySQL**

---
## :large_blue_diamond: *Tài liệu tham khảo*
1. *React Native (https://reactnative.dev/docs/getting-started)*
2. *Flask (https://flask.palletsprojects.com/en/1.1.x/)*

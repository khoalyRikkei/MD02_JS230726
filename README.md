# OOP Typescript

## Encapsulation - Tính bao đóng

- private --> lấy dữ liệu thông qua phương thức, có thể gán lại, không thể truy cập trực tiếp
- readonly --> không thể gán lại, có thể truy cập trực tiếp
- public --> default --> có thể gán, có thể truy cập trực tiếp
- get --> phải có return
- set --> ko return

## Inheritance - Tính kế thừa

- phải có từ khóa **extends**
- Nếu có constructor --> super()
- super() --> kế thừa từ constructor của class cha

- Class con kế thừa cả thuộc tính và phương thức
- Các phương thức con có thể ghi đè lên phương thức cha
- Sử dụng protected để bảo vệ phương thức trong class cha (không truyền sang cho con)

## Polymorphism - Tính đa hình

- Mỗi đối tượng có cùng tên phương thức nhưng thực hiện một khối lệnh khác nhau

## Abstraction - Tính trừu tượng

- extends --> class

- implements --> interface

### So sánh interface với abstract class

#### interface

- từ khóa truyền sang class child: implements --> triển khai
- Kế thừa và triển khai toàn bộ
- Không khởi tạo đối tượng

#### abstract class

- từ khóa truyền sang class child: extents
- Có thể chọn những phương thức triển khai
- Không khởi tạo đối tượng

### So sánh interface với type

#### type

- có thể dùng Union Types và Intersection Types

#### interface

- Không thể dùng Union Types và Intersection Types
- Nhưng mà có thể kế thừa từ interface khác

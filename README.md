# TỔNG HỢP TYPESCRIPT

## ES6

### Khai báo biến

- var
- let
- const

### SPREAD - copy array, object

- ... --> copy mảng hoặc object --> bọc lại mảng hoặc object cho nó

### ...REST - parameters và operator

- tham số (param): nó sẽ copy toàn bộ các đối số và trả về một mảng chứa các đối số đó
- operator: phần còn lại

### destructuring - phá hủy cấu trúc --> đặt biến gon hơn

`const [a,b, ...orders] = [1,2,4,5,6,7]`

`const {name, age} = {name:"Nguyễn Văn A", address: "ĐN", age: 20}`

- với object --> đúng key
- với mảng --> biến đại diện cho thứ tự tương ứng

### arrow function

- Không có this
- Có thể rút ngắn return `(a,b) => a + b`

### import & export

- import chỉ xảy ra khi file export
- export có 2 kiểu

  - export
  - export default

## TYPESCRIPT Fundamental

- Làm việc với typescript

  - cài đặt typescript npm i typescript
  - cài tsc --init --> cấu hình typescript (rootDir, outDir, target: "ES2020")
  - Cài npm init --> cài node module vào file
  - cài lối tắt để compalier --> "start" : "tsc --w"
  - Tất cả file ts đều nằm trong rootDir

- Kiểu (type):
  - Tự động bắt kiểu: `let number  = 10`
  - Gán kiểu: `let text: string = "Hello world`
- Các annotation:
  - basic
    - number
    - string
    - boolean
    - object
    - undefined
    - null
    - any
    - void
  - Advanced
    - intersection `&`
    - union `|`
    - guard type --> đặt điều kiện thực thi
      - typeof
      - instanceof
      - in
    - casting --> as: định nghĩa kiểu, <> ép kiểu

### OOP trong typescript

#### Abstraction: trừu tượng

- che giấu phương thức
- Khi sử dụng với key **abstract**
  - Định nghĩa phương thức cho class child triển khai
  - Không thể tạo _instance_

#### Inheritance - Tính kế thừa

- Kế thừa thuộc tính và phương thức của class parent
  - private: không kế thừa
- Khi child sử dụng super() --> kế thừa constructor
- có tính chất overwrite --> ghi đè phương thức --> tính đa hình

#### Polymorphism - Tính đa hình

- Những instance có cùng tên phương thức nhưng xử lý logic khác nhau

#### Encapsulation - Tính bao đóng

- `readonly` -> chỉ đọc -> không đổi, có thể truy cập trực tiếp
- `public` --> có thể gán, có thể truy cập trực tiếp
- `private`: - chỉ có thể truy cập và gán thông qua phương thức
- `protected`: chỉ làm việc trong class đó
- `static` --> chỉ có thể làm việc với class, không làm việc với instance

- `get `--> bắt buộc phải `return`
- `set` --> không được return và phải chỉ được khai báo 1 tham số

### Generic type

- Đặt biến cho type --> dựa vào đối số --> định nghĩa type sử dụng theo type đối số đó

- Sử dụng:
  - class
  - function

#### Một số keyword

- interface:

  - Triển khai --> tương tự với abstract --> sử dụng keyword `implements `
  - Kế thừa interface từ interface khác (extends)
  - Định nghĩa type --> type

- type: định nghĩa type

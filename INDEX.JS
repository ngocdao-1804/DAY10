// tạo menu:
//  1=> thêm NV mới
//  2 => In thông tin tất cả NV
//  3 => tìm kiếm NV
//  0 để thoát


const prompt = require("prompt-sync")();

// data
const employees = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nva@company.com",
    phoneNumber: "0901234567",
    gender: "Male",
    position: "Developer",
    salary: 2000,
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: null,
    phoneNumber: "0912345678",
    gender: "Female",
    position: "Tester",
    salary: 1200,
  },
];

// thêm nhân viên
const phim1 = () => {
  const number = Number(prompt("Nhập số lượng NV: "));
  let id = employees.length + 1;

  for (let i = 0; i < number; i++) {
    console.log(`Thêm nhân viên ${id}`);

    const name = prompt("Nhập name: ");
    const email = prompt("Nhập email: ");
    const phoneNumber = prompt("Nhập phone: ");
    const gender = prompt("Nhập gender: ");
    const position = prompt("Nhập position: ");
    const salary = Number(prompt("Nhập salary: "));

    employees.push({
      id,
      name,
      email,
      phoneNumber,
      gender,
      position,
      salary,
    });

    id++;
  }

  console.log("Đã thêm nhân viên!");
};

// in tất cả nhân viên
const phim2 = () => {
  console.log(employees);
};

// tìm kiếm nhân viên
const phim3 = () => {
  const employeeName = prompt("Nhập tên NV muốn tìm: ");

  const foundEmployee = employees.filter((employee) =>
    employee.name.toLowerCase().includes(employeeName.toLowerCase())
  );

  console.log(foundEmployee);
};

// menu
let menu;

while (true) {
  menu = Number(
    prompt(
      "\nMenu:\n1. Thêm nhân viên\n2. In tất cả nhân viên\n3. Tìm kiếm nhân viên\n0. Thoát\nChọn: "
    )
  );

  if (menu === 1) {
    phim1();
  } else if (menu === 2) {
    phim2();
  } else if (menu === 3) {
    phim3();
  } else if (menu === 0) {
    console.log("Thoát chương trình");
    break;
  } else {
    console.log("Lựa chọn không hợp lệ");
  }
}

//phím 3: tìm kiếm NV tuyệt đối- dùng find 
// const employeeName = ("Nhập NV muốn tìm");
// const foundEmployee =employees.find((employee) => { 
// return employee.name === employeeName;
// }
// );
// console.log(foundEmployee);

//chỉnh sửa thông tin NV








// lặp các bước giải thuật
/**
 * In: Thông tin NV
 * Output: Ds NV
 * B1: Xdinh bnhieu MV được thêm
 *  -> Biến numOfEmployees
 * B2: Sử dũng vòng lặp for
 *  -> biến i trong loop for
 * -> Nếu i < numOfEmployees, -> đến bước 3
 * -> Nếu i>= numOfEmplyees, -> buo71v 5
 * B3: Cho phép người dùng nhập thông tin nv
 * -> 
 * B4 Đẩy NV vào ds NV
 * -> 
 * B5: In ra ds NV
 * ->
 */
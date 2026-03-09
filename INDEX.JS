
const prompt = require("prompt-sync")();
let employees=[];
const number = prompt("Nhập số lượng NV");
let id = 1;

for (let i=0; i<number; i++);
console.log(`Thêm nhân viên ${id} `);
  const name = prompt("Nhập name: ");
  const email = prompt("Nhập email: ");
  const phoneNumber = prompt("Nhập phone: ");
  const gender = prompt("Nhập gender: ");
  const position = prompt("Nhập position: ");
  const salary = Number(prompt("Nhập salary: "));
 employees.push(
  {
    id,
    name: prompt("Nhập name: "),
    email: prompt("Nhập email: "),
    phoneNumber: prompt("Nhập phone: "),
    gender: prompt("Nhập gender: "),
    position: prompt("Nhập position: "),
    salary: Number(prompt("Nhập salary: ")),
  });
console.log(employees)
id++;

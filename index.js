// ============================================
// const student = {
//     name : "Munkhu" ,
//     age : 18 ,
//     isStudent : true ,
// }
// console.log(student);
// ============================================
// const fruits = ["Алим" , "Банана" , "Жүрж"]
// console.log(fruits);
// ============================================
// const person = {
//     name : "Ану" ,
//     age : 20 ,
// }
// console.log(person.name);
// =============================================
// const colors = ["Улаан", "Ногоон", "Цэнхэр"]
// console.log(colors[0]);
// =============================================
// const product = {name: "Дэвтэр", price: 2500}
// console.log(product["price"]);
// =============================================
// const students = ["Бат", "Ану", "Болд"]
// console.log(students[1]);
// =============================================
// const person = {name: "Бат", age: 18}
// console.log(person.name , person.age ,"настай.");
// =============================================
// const animals = ["Нохой", "Муур", "Туулай", "Морь"]
// console.log(animals .length);
// =============================================
// const numbers = [10 , 20 , 30 , 40 , 50]
// console.log(numbers[numbers.length -1]);
// =============================================
// const student = {
//   name: "Сараа",
//   age: 16,
//   grade: 10,
// };
// const key = "age";
// console.log(student[key]);
// =============================================
// const fruits = ["Алим", "Банана", "Жүрж"]
// fruits[1]="Усан үзэм"
// console.log(fruits);
// =============================================
// const person = {
//   name: "Болд",
//   age: 18,
// };
// if (person.age >= 18) {
//   person.isAdult = true;
// } else {
//   person.isAdult = false;
// }
// console.log(person);
// =============================================
// const books = ["Математик", "Англи хэл"];
// books.push("Программчлал");
// console.log(books);
// =============================================
// const student = {
//     age : 15 ,
//     name : "Ану"
// }
// student.grade = 9
// console.log(student);
// =============================================
// const player = {
//     name : "Тэмүүлэн" ,
//     score : 100
// }
// if (player.score >= 100) {
//     player.score= player.score + 50
// }
// else {
//     player.score= player.score + 10
// }
// console.log(player);
// =============================================
// const items =["Дэвтэр", "Бал", "Баллуур"]
// const removedItems = items.pop()
// console.log(items , removedItems);
// =============================================
// const queue = ["Бат", "Ану"]
// queue.unshift("Болд")
// console.log(queue);
// =============================================
// const lamp = {
//     isOn : true
// }
// if (lamp.isOn === false) {
//     lamp.isOn = "Гэрлийг унтраалаа"
// }
// else {
//     lamp.isOn = "Гэрлийг асаалаа"
// }
// console.log(lamp);
// =============================================
// const queue = ["Болд", "Бат", "Ану"]
// const firstPerson = queue.shift()
// console.log(queue , firstPerson);
// =============================================
// const user = {
//   name: "Бат",
//   isVerified: true,
//   temporaryCode: "ABC123",
// };
// if (user.isVerified === true) {
//   delete user.temporaryCode;
// }
// else {
//     console.log("Эхлээд бүртгэлээ баталгаажуулна уу");
// }
// console.log(user);
// =============================================
// const product = {
//     name :"Дэвтэр" ,
//     price : 2500 ,
//     quantity : 4
// }
// const total = product.price * product.quantity
// console.log(total);
// =============================================
// const rectangle = {
//     width: 5,
//     height: 8,
// }
// rectangle.area = rectangle.width * rectangle.height
// console.log(rectangle);
// =============================================
// const scores = { math: 80, english: 90, programming: 100 }
// const total = (scores.math + scores.english + scores.programming) / 3
// console.log(total);
// =============================================
// const product = { price: 50000, discountPercent: 0 };
// if (product.discountPercent > 0) {
//   const finalPrice =
//     product.price - (product.price * product.discountPercent) / 100;
//   product.finalPrice = finalPrice;
// } else {
//   product.finalPrice = product.price;
// }
// console.log(product);
// =============================================
// const account = { owner: "Болд", balance: 60000 }
// const withdrawAmount = 60000;
// if (account.balance >= withdrawAmount) {
//     account.balance = `${account.balance - withdrawAmount} "Гүйлгээ амжилттай"`
// }
// else {
//     account.balance = `${account.balance} "Үлдэгдэл хүрэлцэхгүй"`
// }
// console.log(account);
// =============================================
// const product = { name: "Бал", stock: 1 };
// const text = product.stock > 0 ? "Бэлэн байна" : "Дууссан";
// console.log(text);
// =============================================
// const numbers = [10, 25, 10]
// const niilber = numbers[0] + numbers[1] + numbers[2]
// console.log(niilber);
// =============================================
// const scores = [80, 90, 100]
// const niilber = (scores[0] + scores[1] + scores[2]) / scores.length
// console.log(niilber);
// =============================================
// const customer = { money: 10000 }
// const product = { price: 8000, stock: 0 }
// if (product.stock > 0 && customer.money >= product.price) {
//     console.log("Авч болно");
// }
// else {
//     console.log("Авч болохгүй");
// }
// =============================================
// const student = { name: "Сараа", score: 100}
// if (student.score >= 90){
//     console.log("Маш сайн");
// }
// else if (student.score >= 60 && student.score <= 90) {
//     console.log("Тэнцсэн");
// }
// else {
//     console.log("Тэнцээгүй");
// }
// =============================================
// const student = { name: "Бат", age: 16 }
// console.log("age" in student , "email" in student);
// =============================================

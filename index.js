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
// const student = { name: "Болд", address: { city: "Улаанбаатар", district: "Хан-Уул" } }
// console.log(student.address.city);
// =============================================
// const person = { name: "Ану", address: { city: "Улаанбаатар", district: "Баянзүрх" } }
// if (person.address.city === "Улаанбаатар") {
//     console.log(person.address.district);
// }
// else {
//     console.log("Орон нутгийн оршин суугч");
// }
// =============================================
// const student = { name: "Бат", scores: { math: 70, english: 80 } }
// if (student.scores.math <= 80){
//     console.log(student.scores.math + 10);
// }
// else {
//     console.log(student.scores.math , "Нэмэлт оноо шаардлагагүй");
// }
// =============================================
// const names = ["Бат", "Ану"];
// [names[0] , names[1]] = [names[1] , names[0]];
// console.log(names);
// =============================================
// const fruits = ["Алим", "Банана", "Жүрж"];
// if (fruits.includes("Банана")) {
//     console.log("Банана байна");
// }
// else {
//     console.log("Банана алга");
// }
// =============================================
// const students = ["Бат", "Ану", "Болд", "Сараа"];
// console.log(students.indexOf("Болд"));
// =============================================
// const order = { product: { price: 5000, quantity: 3 } , delivery: { fee: 2500 } };
// const orderTotal = order.product.price * order.product.quantity ;
// if (orderTotal >= 20000) {
//     order.delivery.fee = 0;
// }
// order.total = orderTotal + order.delivery.fee;
// console.log(order.total);
// =============================================
// const user1 = { name: "Болд", age: 20 };
// const user2 = { email: "bold@example.com", city: "Улаанбаатар" };
// console.log(Object.assign(user1, user2));
// =============================================
// const card = [];
// if (card.length <= 0){
//     console.log("Сагс хоосон");
// }
// else {
//     console.log("Сагсанд бараа байна");
// }
// =============================================
// const numbers = [20, 23];
// if (numbers[0] === numbers[1]) {
//     console.log("Хоёр тоо тэнцүү");
// }
// else if (numbers[0] > numbers[1]) {
//     console.log(numbers[0]);
// }
// else {
//     console.log(numbers[1]);
// }
// =============================================
// const students = ["Бат", "Ану"];
// const newStudent = "Сараа";
// if (!students.includes(newStudent)) {
//   students.push(newStudent);
//   console.log(students);
// } else {
//   console.log("Энэ нэр бүртгэлтэй байна");
// }
// =============================================
// const user1 = { name: "Ану", age: 18 };
// const user2 = { email: "anu@example.com", city: "Улаанбаатар" };
// const newUser = { ...user1, ...user2 };
//  console.log(newUser);
// =============================================
// const groupA = ["Бат", "Ану"];
// const groupB = ["Болд", "Сараа"];
// const allStudents = groupA.concat(groupB);
// console.log(allStudents);
// =============================================
// const original = [10, 20, 30]
// const copied = [...original]
// copied[0] = 99;
// console.log(original);
// console.log(copied);
// =============================================
// const numbers = [10, 20, 30, 40, 50]
// const newNumber = numbers.slice(1 , 4)
// console.log(numbers);
// console.log(newNumber);
// =============================================
// const user = { name: "Сараа", age: 22, email: "saraa@example.com" }
// const copied = {
//     name : user.name ,
//     age : user.age
// }
// copied.name = "Бат";
// console.log(user.name);
// console.log(copied.name);
// =============================================
// const colors = ["Улаан", "Ногоон", "Цэнхэр", "Шар"]
// colors.splice( 1 , 1)
// console.log(colors);
// =============================================
// const days = ["Даваа", "Лхагва"];
// days.splice (1 , 0, "Мягмар")
// console.log(days);
// =============================================
// const words = ["Би", "JavaScript", "сурч", "байна."]
// console.log(words.join(" "));
// =============================================
// const students = [{ name: "Бат", score: 75 }, { name: "Ану", score: 90 }];
// students[0].score += 10;
// if (students[1].score >= 90) {
//     console.log("Ану маш сайн");
// }
// else {
//     console.log("Ану хичээгээрэй");
// }
// console.log(students[0].score);

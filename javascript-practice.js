// function personalInfo(name, age, city) {

//     age = Number(age);

//     let ageAfter5Years = age + 5;

//     let nameType = typeof name;
//     let ageType = typeof age;

//     return {
//         name: name,
//         age: age,
//         city: city,
//         ageAfter5Years: ageAfter5Years,
//         nameType: nameType,
//         ageType: ageType
//     };
// }

// module.exports = { personalInfo };


// function shoppingReceipt(product, price, quantity) {
//     price = Number(price);
//     quantity = Number(quantity);

//     let total = price * quantity;

//     return {
//         product: product,
//         price: price,
//         quantity: quantity,
//         total: total
//     };
// }

// module.exports = { shoppingReceipt };


// function studentGrade(name, exam1, exam2, exam3) {
//     exam1 = Number(exam1);
//     exam2 = Number(exam2);
//     exam3 = Number(exam3);

//     if (
//         isNaN(exam1) || isNaN(exam2) || isNaN(exam3) ||
//         exam1 < 0 || exam1 > 100 ||
//         exam2 < 0 || exam2 > 100 ||
//         exam3 < 0 || exam3 > 100
//     ) {
//         return "Invalid score!";
//     }

//     let average = (exam1 + exam2 + exam3) / 3;
//     average = Number(average.toFixed(2));

//     let result;

//     if (average >= 90) {
//         result = "Excellent";
//     } else if (average >= 70) {
//         result = "Good";
//     } else if (average >= 50) {
//         result = "Passed";
//     } else {
//         result = "Failed";
//     }

//     return {
//         name: name,
//         exam1: exam1,
//         exam2: exam2,
//         exam3: exam3,
//         average: average,
//         result: result
//     };
// }

// module.exports = { studentGrade };

// function movieTicket(name, age, hasTicket) {
//     age = Number(age);

//     if (age === "" || isNaN(age) || age < 0) {
//         return "Invalid age!";
//     }

//     if (age < 16) {
//         return "Age restriction!";
//     }

//     if (age >= 16 && !hasTicket) {
//         return "Ticket required!";
//     }

//     if (age >= 16 && hasTicket) {
//         return "Welcome to the cinema!";
//     }
// }

// module.exports = { movieTicket };

// function atm(enteredPin, option, amount) {
//     let balance = 500;
//     let pinCode = "1234";

//     if (enteredPin !== pinCode) {
//         return "Incorrect PIN!";
//     }

//     switch (option) {
//         case 1:
//             return "Balance: " + balance + " AZN";

//         case 2:
//             amount = Number(amount);

//             if (isNaN(amount) || amount <= 0) {
//                 return "Invalid amount!";
//             }

//             balance = balance + amount;

//             return "Deposit successful! Remaining Balance: " + balance + " AZN";

//         case 3:
//             amount = Number(amount);

//             if (isNaN(amount) || amount <= 0) {
//                 return "Invalid amount!";
//             }

//             if (amount > balance) {
//                 return "Insufficient balance!";
//             }

//             balance = balance - amount;

//             return "Withdrawal successful! Remaining Balance: " + balance + " AZN";

//         case 4:
//             return "Goodbye!";

//         default:
//             return "Invalid option!";
//     }
// }

// module.exports = { atm };


// ------------------------------------------------
// Gənclər evində işlədiklərimiz
// ---------------------------------------------------

// task1

// const students = [

//     { name: "Ali,score:85" },
//     { name: "Leyla", score: 42 },
//     { name: "Murad", score: 96 },
//     { name: "Aysel", score: 73 },
//     { name: "Nihad", score: 34 }

// ];
// function analyzeStudents(students) {
//     let kecenler = [];
//     let kesilenler = [];
//     let cem = 0;

//     for (let student of students) {

//         let { name,score } = students
//         cem+=score;

//         if (kecenler > 50) {
//             passed.push(name)
//         }
//         else if (kesilenler < 50) {
//         failed.push(name)
            
//         }

//         let avarageScore=cem/students.length;

//         return {
//             passed:passed,
//             failed:failed,
//             avarageScore:avarageScore,
//         }
//     }

// }

//         console.log(analyzeStudents(students))

// ------------------------------------------------------------------------------

// task 2

// const cart = [
//     { name: "Keyboard", price: 80, quantity: 2 },
//     { name: "Mouse", price: 35, quantity: 1 },
//     { name: "Monitor", price: 450, quantity: 0 },
//     { name: "USB Cable", price: 15, quantity: 3 }
// ];

// const calculateDiscount = (total) => {

//     if (total >= 200) {
//         return total * 0.15;
//     }
//     else {
//         return 0;
//     }

// };

// function processCart(cart) {

//     let products = cart.filter(product => product.quantity > 0);

//     let newProducts = products.map(product => {

//         let { name, price, quantity } = product;

//         return {
//             name: name,
//             totalPrice: price * quantity
//         };

//     });

//     let subtotal = newProducts.reduce((sum, product) => {
//         return sum + product.totalPrice;
//     }, 0);

//     let discount = calculateDiscount(subtotal);

//     let finalTotal = subtotal - discount;

//     return {
//         items: newProducts,
//         subtotal: subtotal,
//         discount: discount,
//         finalTotal: finalTotal,
//         ...{ currency: "AZN" }
//     };

// }

// console.log(processCart(cart));



// -----------------------------------------------
// Gənclər evində işlədiklərimiz 4 noyabır
// ---------------------------------------------------




// class Student {

//     constructor(name, age, score) {
//         this.name = name;
//         this.age = age;
//         this.score = score;
//     }

//     getInfo() {
//         return this.name + " - " + this.age + " years old";
//     }

//     checkResult() {

//         if (this.score >= 50) {
//             return "Passed";
//         }
//         else {
//             return "Failed";
//         }

//     }

//     updateScore(newScore) {

//         if (newScore >= 0 && newScore <= 100) {
//             this.score = newScore;
//             return this.score;
//         }
//         else {
//             return "Invalid score!";
//         }

//     }
// }

// const student = new Student("Ali", 20, 45);

// console.log(student.getInfo());

// console.log(student.checkResult());

// student.updateScore(85);

// console.log(student.checkResult());

// console.log(student.updateScore(120));

// console.log(student.score);

// console.log(student.getInfo());



// class BankAccount {

//     constructor(owner, balance) {
//         this.owner = owner;
//         this.balance = balance;
//         this.transactions = [];
//     }

//     deposit(amount) {

//         if (amount <= 0) {
//             return "Invalid amount!";
//         }

//         this.balance += amount;

//         this.transactions.push({
//             type: "deposit",
//             amount: amount
//         });

//         return this.balance;
//     }

//     withdraw(amount) {

//         if (amount <= 0) {
//             return "Invalid amount!";
//         }

//         if (amount > this.balance) {
//             return "Insufficient balance!";
//         }

//         this.balance -= amount;

//         this.transactions.push({
//             type: "withdraw",
//             amount: amount
//         });

//         return this.balance;
//     }

//     getBalance() {
//         return this.balance;
//     }

//     getTransactions() {
//         return this.transactions;
//     }

//     // Bonus
//     getTransactionSummary() {

//         let totalDeposits = 0;
//         let totalWithdrawals = 0;

//         for (let transaction of this.transactions) {

//             if (transaction.type == "deposit") {
//                 totalDeposits += transaction.amount;
//             }
//             else {
//                 totalWithdrawals += transaction.amount;
//             }

//         }

//         return {
//             totalDeposits: totalDeposits,
//             totalWithdrawals: totalWithdrawals,
//             transactionCount: this.transactions.length
//         };
//     }
// }

// // Testing

// const account = new BankAccount("Ali", 500);

// console.log(account.deposit(200));

// console.log(account.withdraw(150));

// console.log(account.withdraw(1000));

// console.log(account.getBalance());

// console.log(account.getTransactions());

// console.log(account.getTransactionSummary());


// class Library {

//     constructor() {
//         this.books = [];
//     }

//     addBook(id, title, author) {

//         let book = this.books.find(book => book.id == id);

//         if (book) {
//             return "Book already exists!";
//         }

//         this.books.push({
//             id: id,
//             title: title,
//             author: author,
//             isAvailable: true
//         });

//         return "Book added successfully!";
//     }

//     findBook(id) {

//         let book = this.books.find(book => book.id == id);

//         if (book) {
//             return book;
//         }
//         else {
//             return "Book not found!";
//         }
//     }

//     borrowBook(id) {

//         let book = this.books.find(book => book.id == id);

//         if (!book) {
//             return "Book not found!";
//         }

//         if (book.isAvailable == false) {
//             return "Book is not available!";
//         }

//         book.isAvailable = false;

//         return "Book borrowed successfully!";
//     }

//     returnBook(id) {

//         let book = this.books.find(book => book.id == id);

//         if (!book) {
//             return "Book not found!";
//         }

//         if (book.isAvailable == true) {
//             return "Book is already available!";
//         }

//         book.isAvailable = true;

//         return "Book returned successfully!";
//     }

//     getAvailableBooks() {

//         let available = this.books.filter(book => book.isAvailable == true);

//         return available.map(book => book.title);
//     }

//     // Bonus
//     getLibraryStats() {

//         let available = this.books.filter(book => book.isAvailable == true);

//         let borrowed = this.books.filter(book => book.isAvailable == false);

//         return {
//             totalBooks: this.books.length,
//             availableBooks: available.length,
//             borrowedBooks: borrowed.length
//         };
//     }
// }

// // Testing

// const library = new Library();

// console.log(library.addBook(1, "Clean Code", "Robert Martin"));

// console.log(library.addBook(2, "Atomic Habits", "James Clear"));

// console.log(library.borrowBook(1));

// console.log(library.borrowBook(1));

// console.log(library.getAvailableBooks());

// console.log(library.returnBook(1));

// console.log(library.getAvailableBooks());

// console.log(library.getLibraryStats());


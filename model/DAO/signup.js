// var users = require("./users");

// // Model start here
// function checkEmpty(name, email, password) {
//     if (!name || !email || !password)
//         return true;
//     return false;
// };
// function checkExistEmail(email) {
//     return users.searchByEmail(email);
// }
// function checkValidEmail(email) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return mailformat.test(email);
// }
// function addUser(name, email, password) {
//     users.addUser(name, email, password);
// }
// function getData(email) {
//     return users.getDataByEmail(email);
// }

// module.exports = {
//     checkEmpty,
//     checkExistEmail,
//     checkValidEmail,
//     addUser,
//     getData
// }
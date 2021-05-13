const os = require("os")
const fs = require("fs")
const crypto = require("crypto")
const data = require("./data")

// Fetching os user details
var value = os.userInfo()

// calling data function which will return object of name, year and qualification
var userdata = data("ProGrad", 2021, "BTECH")

// encrypt the password
const password = crypto.createHmac('sha256', "secret").update('Prograd').digest('hex');

// all details are saved into message.txt
fs.appendFileSync("message.txt", "Prograd Details: \n")

fs.appendFileSync("message.txt", `\tUserId ->          ${value.uid},\n`)
fs.appendFileSync("message.txt", `\tName ->            ${userdata.name},\n`)
fs.appendFileSync("message.txt", `\tYear ->            ${userdata.Year},\n`)
fs.appendFileSync("message.txt", `\tQualification ->   ${userdata.Qualification},\n`)
fs.appendFileSync("message.txt", `\tUserName ->        ${value.username},\n`)
fs.appendFileSync("message.txt", `\tPassword ->        ${password},\n`)

// console.log(value.uid)
// console.log(userdata.name)
// console.log(userdata.Year)
// console.log(userdata.Qualification)
// console.log(value.username)
// console.log(password)
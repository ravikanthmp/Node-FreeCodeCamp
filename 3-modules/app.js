//  const sayHi = require('./utils') 
// const names = require('./names')

// console.log(sayHi("vws"))

// const data = require('./alternate-ways-to-export')
// data.person = 'vsfs'
// console.log(data.items)
// console.log(data.person)

let {res, add} = require('./mind-grenade');

console.log(`first` + res)

console.log(`add` + add())

console.log(`second` + res)

console.log(this)
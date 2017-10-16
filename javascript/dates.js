// FUN WITH DATES
// note the format. This works!
const newvar = new Date(Date.parse("2005.07.08"))
newvar

// But this below is not a date format js can work with
let tdate = '01.30.2001';
// so we slice
tdate = [tdate.slice(-4), tdate.slice(0,5)].join('.');

console.log(tdate) // 2001.01.30

const xtr = new Date(tdate);
const qiu = xtr.getFullYear()
console.log(qiu); // 2001
console.log(xtr.getDate()); // 30

// gotta write 'em out here cuz vanilla only returns 0-11
const monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
];

console.log(monthNames[xtr.getMonth()]); // January

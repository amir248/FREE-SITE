const d=new Date();
let year=d.getFullYear();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let m=months[d.getMonth()];
let day=d.getDate();
document.querySelector('#date').innerHTML=`${year}` + '/'+`${m}` +'/'+`${day}`;
// console.log(d.getDate());
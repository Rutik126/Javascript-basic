let MyDate = new Date()
console.log(MyDate.toDateString());

let NewDate = new Date(29,1,23,45,3)
console.log(NewDate.toDateString());

let Timestamp = Date.now()
console.log(Timestamp);
console.log(NewDate.getTime());

NewDate.toLocaleString('default',{
    weekday:"long"
})
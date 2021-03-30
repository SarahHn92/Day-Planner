// add today's date

console.log("Hi there");

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(today);

// hook up save buttons to local storage
var saveBtn = $(".btn");

//function


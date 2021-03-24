//setup value for day
let day = 0
let age = 0
//event listener
document.getElementById('button').addEventListener('click', check)
// functions
function check () {
day = document.getElementById('day').value
day = parseInt(day)
age = document.getElementById('age').value
age = parseInt(age)
if (age < 5 || age > 95) {
  alert('you get in for free due to your age')
} else if (age > 11 && age < 21) {
  alert('you are eligable for the student discount due to your age')
} else if (day === 4 || day === 6) {
  alert('you get the student discout due to the day you are going "tuesday or thursday"')
} else {
  alert('you will be admited a the normal price')
}
}

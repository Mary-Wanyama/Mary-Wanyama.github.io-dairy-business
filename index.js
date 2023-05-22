document.getElementById("title").innerHTML = "Farmville";
var arr = document.querySelectorAll("input")
var nums = []


for (let i = 0; i < 5; i++) {
  document.querySelectorAll("input")[i].addEventListener("blur", function(){
    console.log(document.querySelectorAll("input")[i].value)
    nums.push(parseInt(document.querySelectorAll("input")[i].value))
    const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    console.log(sum)
    document.querySelector('.total').textContent = sum
    let week = sum*7
    document.querySelector('.week').textContent = week
    let thirty = sum * 30
    let twenty = sum * 28
    let thirtyone = sum * 31
    document.querySelector('.feb').textContent = twenty
    let jan = document.querySelectorAll(".jan")
    for (let i = 0; i < jan.length; i++) {
      document.querySelectorAll('.jan')[i].textContent = thirtyone
    }
    let ap = document.querySelectorAll('.ap')
    for (let i = 0; i < ap.length; i++) {
      document.querySelectorAll('.ap')[i].textContent = thirty
    }
    let arrays = document.querySelectorAll('.month')
    let adding = []
    for (let i = 0; i < arrays.length; i++) {
      
      adding.push(parseInt(document.querySelectorAll('.month')[i].textContent))
      const year = adding.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      document.querySelector('.year').textContent= year
    }
  })
}
document.querySelector('.pag').addEventListener('click', function() {
  document.querySelector('#display').removeAttribute('id')
  document.querySelector('.homepage').id = "display"
})
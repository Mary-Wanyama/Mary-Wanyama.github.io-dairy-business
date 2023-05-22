document.getElementById("title").innerHTML = "Farmville";
var arr = document.querySelectorAll(".shed")
var nums = [1,2,3,4,5]
let sum = 0

function leapyear(annual)
{
return (annual % 100 === 0) ? (annual % 400 === 0) : (annual % 4 === 0);
}
let eight = 28





for (let i = 0; i < arr.length; i++) {
  document.querySelectorAll(".shed")[i].addEventListener("blur", function(){
    console.log(document.querySelectorAll(".shed")[i].value)
    nums[i] = parseInt(document.querySelectorAll(".shed")[i].value)

    sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    console.log(sum)
    document.querySelector('.total').textContent = sum
    let week = sum*7
    document.querySelector('.week').textContent = week
    let thirty = sum * 30
    let twenty = sum * eight
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
document.querySelector('.pag').addEventListener('click', function(e) {
  e.preventDefault()
  document.querySelector('#display').id = "hello"
  document.querySelector('.homepage').id = "display"
  let number = parseInt(document.querySelector('.input').value)
document.querySelector('.h4').textContent = number
if(leapyear(number)===true){
  eight = 29
}else{eight=28}
})
document.querySelector('.hom').addEventListener('click', function(e){
  e.preventDefault()
  document.querySelector('.homepage').id = "hello"
  document.querySelector('.display').id = "display"
})
document.querySelector('.button').addEventListener('click', function(){
  for (let i = 0; i < arr.length; i++) {
    arr[i].value = 0
    nums = [0,0,0,0,0]
    sum = 0
  }
  document.querySelector('.year').textContent = '-'
  document.querySelector('.feb').textContent = '-'
  document.querySelector('.total').textContent = '-'
  document.querySelector('.week').textContent = '-'
  var first = document.querySelectorAll('.jan')
  var second = document.querySelectorAll('.ap')
  for (let i = 0; i < first.length; i++) {
    first[i].textContent = '-'
    
  }
  for (let i = 0; i < second.length; i++) {
    second[i].textContent = '-'
    
  }
  
})
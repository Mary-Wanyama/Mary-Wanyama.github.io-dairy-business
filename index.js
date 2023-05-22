document.getElementById("title").innerHTML = "Farmville";
var arr = document.querySelectorAll("input")
var nums = []

for (let i = 0; i < arr.length; i++) {
  document.querySelectorAll("input")[i].addEventListener("blur", function(){
    console.log(this.value)
    nums.push(this.value)
    const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    console.log(sum)
  })
}
function Listener() {
  if(parseInt(arr[i].value)){
    
    document.querySelector(".total").textContent = 0 + parseInt(arr[i].value)
    document.querySelector('.week').textContent = parseInt( document.querySelector(".total").textContent) * 7

    var thirtyone = document.querySelectorAll(".jan")

    for (let i = 0; i < thirtyone.length; i++) {
      document.querySelectorAll(".jan")[i].textContent = parseInt( document.querySelector(".total").textContent)* 31
    }
    var thirty = document.querySelectorAll('.ap')
    for (let i = 0; i < thirty.length; i++) {
      document.querySelectorAll(".ap")[i].textContent = parseInt( document.querySelector(".total").textContent)* 30
    }
    document.querySelector('.feb').textContent =  parseInt( document.querySelector(".total").textContent)* 28


    document.querySelector('.year').textContent =  parseInt( document.querySelector(".total").textContent)* 365
  } 

}

// function add(key) {
//   switch (key) {
//     case 'shed1':
      
//       break;
//       case value:
      
//       break;
//       case value:
      
//       break;
//       case value:
      
//       break;
//       case value:
      
//       break;
  
//     default:
//       break;
//   }
// }
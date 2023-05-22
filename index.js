document.getElementById("title").innerHTML = "Farmville";
var arr = document.querySelectorAll("input")
var nums = []

for (let i = 0; i < arr.length; i++) {
  document.querySelectorAll("input")[i].addEventListener("blur", function(){
    console.log(this.value)
    nums.push(parseInt(this.value))
    const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    console.log(sum)
    document.querySelector('.total').textContent = sum
  })
}

document.getElementById("title").innerHTML = "Farmville";
document.getElementById("foot").innerHTML = "Farmville";

function findTotal() {
  findDailyTotal();
  findWeeklytotal();
  findMonthlyTotal();
  findMonthtotal();
  findAprilTotal();
  findFebtotal();
}
function findDailyTotal() {
  var output = document.getElementsByName("shed");
  var day = 0;

  for (var i = 0; i < output.length; i++) {
    if (parseInt(output[i].value)) day += parseInt(output[i].value);
  }
  document.getElementById("total").value = day;
}
function findWeeklytotal() {
  var week = 7;
  var days = document.getElementById("total").value;
  var week = week * days;
  document.getElementById("weekly").value = week;
}

function findMonthtotal() {
  var days = document.getElementById("total").value;
  const collection = document.getElementsByName("jan");
  for (let i = 0; i < collection.length; i++) {
    collection[i].value = days * 31;
  }
}
function findFebtotal() {
    var feb = 29;
    var days = document.getElementById("total").value;
    var feb = feb * days;
    document.getElementById("feb").value = feb;
  }
function findAprilTotal() {
    var days = document.getElementById("total").value;
    const collect = document.getElementsByName("april");
    for (let i = 0; i < collect.length; i++) {
      collect[i].value = days * 30;
    }
  }
function findMonthlyTotal() {
  var input = document.getElementsByClassName("month");
  var year = 0;

  for (var i = 0; i < input.length; i++) {
    if (parseInt(input[i].value)) year += parseInt(input[i].value);
  }
  document.getElementById("yearly").value = year;
}

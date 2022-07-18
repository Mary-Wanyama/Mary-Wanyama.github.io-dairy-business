document.getElementById("title").innerHTML = "Farmville";
document.getElementById("foot").innerHTML = "Farmville";


function findTotal(){
    var output = document.getElementsByName('shed');
    var day=0;

    for(var i=0;i<output.length;i++){
        if(parseInt(output[i].value))
            day += parseInt(output[i].value);
            
    }
    document.getElementById('total').value = day;
}




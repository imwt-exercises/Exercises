function set() {
    var string = document.getElementById('input1').value;
    document.getElementById('s1').innerHTML = string;
}

function checkDate() {
    var date1 = document.getElementById('date1').value;
    var date2 = document.getElementById('date2').value;
    if (date1==''||date2=='') {
        alert('Attention! None of the dates can be empty. Please enter the dates.');
    }   else if (date1==date2) {
            alert('Attention! The two dates can\'t be the same. Please change them.');
    }   else {
            alert('Well done!')
    }
}
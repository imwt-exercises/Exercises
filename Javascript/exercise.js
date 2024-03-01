function hello() {
    alert('hello');
}

function add() {
    var n = parseInt(document.getElementById('s1').innerHTML);
    document.getElementById('s1').innerHTML = n+1;
}

function reset() {
    document.getElementById('s1').innerHTML = 0;
}

function over() {
    console.log('Mouse Over!');
}

function set() {
    var string = document.getElementById('input1').value;
    document.getElementById('s1').innerHTML = string;
}

function showDate() {
    var today = new Date();
    document.getElementById('date1').value = today;
    document.getElementById('date2').value = today+1;
}

document.write("<p>A second paragraph</p>");
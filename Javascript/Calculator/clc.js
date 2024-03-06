function adder() {
    var n = parseInt(document.getElementById('s1').innerHTML);
    document.getElementById('s1').innerHTML = n+1;
}

function deleter() {
    var n = document.getElementById('s1').innerHTML;
    document.getElementById('s1').innerHTML = 0;
}

function display(event) {
    var c = document.getElementById('display').value;
    var to_add = event.target.value;
    if (c==0) {
        document.getElementById('display').value = to_add;
    } else {
        document.getElementById('display').value = c + to_add;
    }
}

function cancel() {
    document.getElementById('display').value = 0;
    document.getElementById('clc-head').innerHTML = 0;
}

function invertSign() {
    var n = document.getElementById('display').value;
    document.getElementById('display').value = -1 * n;
}

function showHead(event) {
    var displayed = document.getElementById('display').value;
    var clc_head = document.getElementById('clc-head').innerHTML;
    var operator = event.target.value;
    document.getElementById('clc-head').innerHTML = ' ' + displayed + ' ' + operator;
    document.getElementById('display').value = 0;
}
function validateMyForm() {
    var inputs, index;
    const text_inputs = [];
    inputs = document.getElementsByTagName('input');
    
    for (index = 0; index < inputs.length; ++index) {
        if (inputs[index].type == 'text') {
            text_inputs.push(inputs[index].value);
        }
    }

    const invalidInputs = text_inputs.filter(input => input === '');

    if (invalidInputs.length > 0) {
        alert('Warning! Check Name, Surname, Address, City or Zip: one of them is not filled.');
        return false;
    }

    var start_date = document.getElementById('dateFrom').value.toString();
    const date = new Date();
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    var y_m_d = date.getFullYear() + '-' + month + '-' + day;
    var end_date = document.getElementById('dateTo').value;

    console.log(start_date>y_m_d);

    

    var zip = document.getElementById('zip').value;
    if (zip.length < 5) {
        alert('Warning! The Zip code must be at least long five characters.');
        return false;
    }

}

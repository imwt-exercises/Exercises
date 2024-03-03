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

    const today = new Date();
    const start_date = new Date(document.getElementById('dateFrom').value);
    const end_date = new Date(document.getElementById('dateTo').value);
    var msInAWeek = 1000 * 60 * 60 * 24 * 7;
    if (start_date.getTime() <= today.getTime()) {
        alert('Warning! The arriving date must be in the future.');
        return false;
    } else if ((end_date.getTime() - start_date.getTime()) < msInAWeek) {
        alert('Warning! The departing date must be at least seven days after the arriving.');
        return false;
    }

    var zip = document.getElementById('zip').value;
    if (zip.length < 5) {
        alert('Warning! The Zip code must be at least long five characters.');
        return false;
    }
}

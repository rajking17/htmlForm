let button = document.getElementById('submit');
button.addEventListener('click', function formSubmit(e){
    e.preventDefault();
    var table = document.getElementById('formTable');    
    var tbody = document.querySelector('tbody');
    table.append(tbody)
    var row = tbody.insertRow(-1);
    var fname = row.insertCell(0);
    var lname = row.insertCell(1);
    var address = row.insertCell(2);
    var pincode = row.insertCell(3);
    var gender = row.insertCell(4);
    var foodChoice = row.insertCell(5);
    var state = row.insertCell(6);
    var country = row.insertCell(7);
    fname.innerHTML = document.getElementById('first-name').value;
    lname.innerHTML = document.getElementById('last-name').value;
    address.innerHTML = document.getElementById('address').value;
    pincode.innerHTML = document.getElementById('pincode').value;
    gender.innerHTML = document.querySelector('input[name="gender"]:checked').value;
    foodChoice.innerHTML = document.getElementById('foodChoice').value;
    state.innerHTML = document.getElementById('state').value;
    country.innerHTML = document.getElementById('country').value;


    let form = document.getElementById('data');
    form.reset();
})

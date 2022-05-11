"use strict"
var coffees = [];
function fillCoffeeArray()
{
    if (localStorage.getItem("coffeeArray") === null) {
        coffees = [
            {id: 1, name: 'Light City', roast: 'light'},
            {id: 2, name: 'Half City', roast: 'light'},
            {id: 3, name: 'Cinnamon', roast: 'light'},
            {id: 4, name: 'City', roast: 'medium'},
            {id: 5, name: 'American', roast: 'medium'},
            {id: 6, name: 'Breakfast', roast: 'medium'},
            {id: 7, name: 'High', roast: 'dark'},
            {id: 8, name: 'Continental', roast: 'dark'},
            {id: 9, name: 'New Orleans', roast: 'dark'},
            {id: 10, name: 'European', roast: 'dark'},
            {id: 11, name: 'Espresso', roast: 'dark'},
            {id: 12, name: 'Viennese', roast: 'dark'},
            {id: 13, name: 'Italian', roast: 'dark'},
            {id: 14, name: 'French', roast: 'dark'},
        ];
    }
    else
    {
        coffees = JSON.parse(localStorage.getItem("coffeeArray"));
    }
    coffeeToPage(coffees);
}
function coffeeToPage(coffeeArray)
{
    tbody.innerHTML = renderCoffees(coffeeArray.sort((a,b) => (a.name > b.name) ? -1 : 1));
}
function saveCoffeeArray()
{
    localStorage.setItem("coffeeArray",JSON.stringify(coffees));
}
function addNewCoffee()
{
    var newCoffeeName = addCoffee.value;
    var selectedRoast = roastSelectionNew.value;
    var obj = {};
    obj['id'] = coffees.length+1;
    obj['name'] = newCoffeeName;
    obj['roast'] = selectedRoast;
    coffees.push(obj);
    saveCoffeeArray();
}
function renderCoffee(coffee) {
    var html = '<div class="card tr coffee">';
    html += '<div class="card-body coffeeCard">';
    html += '<div class="td coffeeName " style="max-width:150px;">' + coffee.name + '</div>';
    html += '<div class="td coffeeRoast text-muttext-muteded">' + coffee.roast + '</div>';
    html += '</div>';
    html += '</div>';
    return html;
}
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
function updateCoffees(e) {
    var textSearch = nameSelection.value.toLowerCase();
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    console.log(textSearch);
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "any") {
            filteredCoffees.push(coffee);
        }
    });
    coffeeToPage(filteredCoffees);
}
function updateCoffeesText(e) {
    var filteredCoffees = [];
    var textSearch = nameSelection.value.toLowerCase();
    var selectedRoast = roastSelection.value;
    console.log(textSearch);
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(textSearch) && (coffee.roast.toLowerCase() === selectedRoast || selectedRoast === 'any')) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeToPage(filteredCoffees);
}
var tbody = document.querySelector('#coffees');
tbody.innerHTML = renderCoffees(coffees);
var submitButton = document.querySelector('#submit');
var submitButtonText = document.querySelector('#submitText');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector("#submitType")
var submitCoffee = document.querySelector("#submitCoffee")
submitCoffee.addEventListener('click', addNewCoffee);



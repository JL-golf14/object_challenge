var locations = []; // this array will hold your objects

// object constructor
function PizzaConstructor(state, revenue, locationCount){
  this.state = state;
  this.revenue = revenue;
  this.locationCount = locationCount;
  this.averageRevenue = function() {
    var calcAverageRevenue =
    revenue/ locationCount;
    return parseFloat(calcAverageRevenue);
  };
};
// object instances
var ilPizza = new PizzaConstructor("IL", 5000, 12);
var mnPizza = new PizzaConstructor("MN", 300, 3);
var nvPizza = new PizzaConstructor("NV", 25000, 1);
// push object instances to locations array
locations.push(ilPizza,mnPizza,nvPizza);
// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});

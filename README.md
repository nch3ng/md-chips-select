The Angularjs Plugin - Learn from [Angular Material](https://material.angularjs.org/latest/#/), and add a multi-select menu to md-chips.

[Demo](http://codepen.io/boo0330/pen/EjOWgg) in Codepen


Prerequisites: angular.js, angular-animate.js

Include the md-chips-select.js and md-chips-select.css

<b>In your HTML file:</b>

&lt;md-chips-select ng-model=&quot;selectedItems&quot; select-items=&quot;listItems&quot; main-title=&quot;name&quot;&gt;&lt;/md-chips-select&gt;

<b>ng-model (required)</b>:  The array to store the selected items<br>
<b>select-items (required)</b>: The array of the items in the select list<br>
<b>main-title (optional)</b>: The attributes seperated by space. It will combine all value of the attributes as the title of the list item.  If the main-title is not given, there must be one attibute named "title" in the select-items array<br>
  Ex: main-title = "name id"
  
  It will combine the value of the attribute "name" and "id" (See the example below)

<b>In your javascript:</b>

Add an array for ngModel (selected)
Ex: $scope.selectedItems = []

Add an array for select-items
Ex: $scope.listItems = [{
      name: "Mini Cooper",
      id: 0
    }, {
      name: "Lexus IS250",
      id: 1
    }, {
      name: "Ford F150",
      id: 2
    }, {
      name: "Toyota Prius",
      id: 3
    }];

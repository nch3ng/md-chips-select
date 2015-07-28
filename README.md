![Bower version](https://img.shields.io/bower/v/bootstrap.svg)
![npm version](https://img.shields.io/npm/v/npm.svg)

The Angularjs module - Learn from [Angular Material](https://material.angularjs.org/latest/#/), and add a multi-select menu to md-chips. <b>[Demo](http://codepen.io/boo0330/pen/EjOWgg)</b> in Codepen

<img src="https://content-na.drive.amazonaws.com/cdproxy/templink/azrl5NmKIAcCaC-7MjvkW-GG6nk0frVZ8aflUbdRXNcLAYspN?viewBox=1396" width="30%">


<b>Prerequisites:</b> angular.js, angular-animate.js

You can install the package
via npm
```shell
npm install md-chips-select
```
or via bower
```shell
bower install md-chips-select
```

Include the md-chips-select.js and md-chips-select.css in the HTML file

<b>In HTML:</b>

&lt;md-chips-select ng-model=&quot;selectedItems&quot; select-items=&quot;listItems&quot; main-title=&quot;name&quot;&gt;&lt;/md-chips-select&gt;

<b>ng-model (required)</b>:  The array to store the selected items<br>
<b>select-items (required)</b>: The array of the items in the select list<br>
<b>main-title (optional)</b>: The attributes seperated by space. It will combine all value of the attributes as the title of the list item.  If the main-title is not given, there must be one attibute named "title" in the select-items array<br>
  Ex: main-title = "name id"
  
  It will combine the value of the attribute "name" and "id" (See the example below)

<b>In javascript:</b>

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

![Bower version](http://img.shields.io/bower/v/bootstrap.svg)
![npm version](http://img.shields.io/npm/v/npm.svg)

The Angularjs module - Learn from [Angular Material](https://material.angularjs.org/latest/#/), and add a multi-select menu to md-chips. <b>[Demo](http://codepen.io/boo0330/pen/EjOWgg)</b> in Codepen

<img src="http://i359.photobucket.com/albums/oo37/Nate_Cheng/screenshot_zpshcobe0ki.png" width="70%">


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
```html
<md-chips-select ng-model="selectedItems" select-items="listItems" main-title="name"><md-chips-select>
```
<b>ng-model (required)</b>:  The array to store the selected items<br>
<b>select-items (required)</b>: The array of the items in the select list<br>
<b>main-title (optional)</b>: The attributes seperated by space. It will combine all value of the attributes as the title of the list item.  If the main-title is not given, there must be one attibute named "title" in the select-items array  
<p>
  Ex: main-title = "name id"  
  It will combine the value of the attribute "name" and "id" (See the example below)
</p>
<b>In javascript:</b>

Inject the modules "ngAnimate" & "md.chips.select" when you initialize the app.   
Ex: angular.module("yourApp", ['ngAnimate', 'md.chips.select']);   

Add an array for ngModel (selected) in your controller   
<p>
Ex: $scope.selectedItems = []
</p>
Add an array for select-items
<p>
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
</p>

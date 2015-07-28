var MD_CHIPS_SELECT_TEMPLATE = '\
  <md-chips-wrap class="md-chips-select" ng-class="{ \'md-focused\': isFocused() }"> \
    <md-chip ng-repeat="chip in mdChipItems" class="md-chip"> \
      <span class="md-chip-content">{{chip.mainTitle}} </span>\
      <button class="md-remove" ng-click="removeFromChips(chip)"> \
        <span class="remove"> \
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" style="pointer-events: none; display: block;"><g><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"></path></g></svg> \
        </span> \
      </button> \
    </md-chip>\
    <div class="md-chip-input-container"> \
      <input type="text" \
        ng-focus="onInputFocus($event)" \
        ng-model="chipInput" \
        ng-blur="onInputBlur()" \
        ng-keydown="onKeyDown($event)" />\
      </md-chip-input-container> \
    </div> \
    <md-select-list ng-show="selectActive" ng-style="{top: ytop, left: xleft}"> \
      <md-select-item-wrapper ng-repeat="item in mdSelectItems" ng-class="{\'active\': !isInChips(item)}" ng-show="inputQuery(item)" ng-click="toggleItem(item)"> \
        <md-select-item-title >{{item.mainTitle}}</md-select-item-title> \
      </md-select-item-wrapper> \
    </md-select-list> \
  </md-chips-wrap>';


var MD_CHIPS_SELECTBOX_TEMPLATE = '\
  <md-select-list ng-show="selectActive" class="ng-hide-add" ng-style="{top: ytop, left: xleft}"> \
    <md-select-item-wrapper ng-repeat="item in mdSelectItems" ng-class="{\'active\': !isInChips($index)}"/*ng-show="isInChips($index)" */ng-click="toggleItem($index)"> \
      <md-select-item-title >{{item.mainTitle}}</md-select-item-title> \
    </md-select-item-wrapper> \
  </md-select-list>';
angular.module('md.chips.select', [])
.service("mdItems", function(){

})
.directive('mdChipsSelect', [/*"$mdTheming", "$mdUtil", */"$document", "$compile", "$log", "$timeout", function(/*$mdTheming, $mdUtil, */$document, $compile, $log, $timeout){
  return {
    restrict: 'E',
    replace: false,
    controller: "mdChipsCtrl",
    template: function(element, attrs) {
   
      return MD_CHIPS_SELECT_TEMPLATE;
    },
    require: "?ngModel",
    scope: {
      ngModel: '=',
      selectItems: '=',
      mainTitle: '@'
    },
    link: function (scope, element, attrs) {

      scope.mdChipItems = scope.ngModel;
      scope.mdSelectItems = scope.selectItems;

      if(scope.mainTitle == null) {
        scope.mainTitle = "title";
      }
      var subString = scope.mainTitle.split(' ');
      angular.forEach(scope.mdSelectItems, function(obj, key){
        obj.mainTitle = '';
        angular.forEach(subString, function(field, fkey){
          if(obj[field]!=null){
            obj.mainTitle += obj[field].toString();
            obj.mainTitle += ' ';
          }
        });
      });

      $document.bind('click', function(e){
        var clicked = e.target.nodeName;
        if( e.target.nodeName != "MD-SELECT-ITEM-WRAPPER"
            && e.target.nodeName != "MD-SELECT-ITEM-TITLE" 
            && e.target.nodeName != "INPUT" 
            && e.target.nodeName != "MD-ICON"
            && (e.target.nodeName != "SPAN" || e.target.attributes.getNamedItem("class").value.indexOf("md-chip-content") == -1)
            && (e.target.nodeName != "SPAN" || e.target.attributes.getNamedItem("class").value.indexOf("remove") == -1)
          ){
          
            $timeout(function(){
              // Close select panel
              scope.selectActive=false;
            }, 0)
        }
      });
      
      scope.onInputFocus = function(event){
        scope.ytop = (event.currentTarget.offsetTop+35) +'px';
        scope.xleft = (event.currentTarget.offsetLeft) + 'px';
        scope.selectActive = true;
        scope.focus = true;
      }

      scope.onInputBlur = function(){
        scope.focus = false;
      }

      scope.isFocused = function(){
        return scope.focus;
      }

      scope.onKeyDown = function(e) {
        if(e.which==13) { //Enter
          if(scope.chipInput && scope.chipInput != "" && scope.ngModel.indexOf(scope.chipInput) == -1)
            this.ngModel.push(scope.chipInput)
          scope.chipInput = "";
        }
        else if(e.which == 8){
          if (scope.chipInput == null || scope.chipInput == ""){
            this.ngModel.pop();
          }
        }
      }
      scope.removeFromChips = function(item){
        var chipIndex = scope.ngModel.indexOf(item);
        scope.ngModel.splice(chipIndex, 1);
      }

      scope.isSelectActive = function(){
        return scope.selectActive;
      }

      scope.addToChips = function(obj){
        scope.ngModel.push(obj);
        scope.chipInput = "";
        scope.chipInput.focus=true;
      }

      scope.toggleItem = function(item) {

        //var item = scope.mdSelectItems[index];
        var chipIndex = scope.ngModel.indexOf(item);

        if(  chipIndex != -1 ) {
          scope.removeFromChips(chipIndex);

        } else {
          scope.addToChips(item);
        }
      } 

      scope.isInChips = function(item) {
        return scope.ngModel.indexOf(item) == -1;
      }  
      scope.inputQuery = function(item) {

        if(!scope.chipInput ||
          scope.chipInput == "" || angular.lowercase(item.mainTitle).indexOf(angular.lowercase(scope.chipInput))!=-1)
          return true;
        else
          return false;
      }
    }
  }
}])
.controller("mdChipsCtrl", ['$scope', function($scope){
  $scope.focus = false;
  $scope.selectActive = false;
  $scope.mdChipItems = [];
  $scope.mdSelectItems = [];
  $scope.currentMdSelectItems = [];
  $scope.ytop = 0;
  $scope.xleft = 0;
}])
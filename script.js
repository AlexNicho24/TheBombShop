//UI CONTROLLER
var UIController = (function() {

  var DOMstrings = {
    button: '.show__button',
    list: '.section-generic--sidebar__list',
    showIcon: '.show__button--icon',
    showIcon2: '.show__button--icon--2'
  }

  return {
    displayItems: function(){
      document.querySelector(DOMstrings.list).classList.toggle('active')
      document.querySelector(DOMstrings.showIcon).classList.toggle('active')
      document.querySelector(DOMstrings.showIcon2).classList.toggle('active')
    },

    getDOMstrings: function(){
      return DOMstrings;
    },
  };
}());

//GLOBAL APP CONTROLLER
var controller = (function(UICtrl) {

  var setupEventListener = function() {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.button).addEventListener('click', listLinks);

  };

  var listLinks = function(){
    //1. List Items that are hidden
    UICtrl.displayItems();
  };


  return{
    init: function(){
      setupEventListener();
    }
  };
}(UIController));

controller.init();

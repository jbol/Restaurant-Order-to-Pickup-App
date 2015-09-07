(function(){
  
  /* Create a module */
  var app = angular.module('cafeteria', []);
  
  /* Create a controller */
  app.controller('MenuController', function(){
  	/* Set controller product property to gem */
  	this.menu = menuitems;
  });

  var menuitems = [
  {
    name: 'Pepperoni',
    price: 9.50,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    soldOut: false,
  },
  {
    name: 'Veggie',
    price: 8,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    soldOut: false,
  },
  {
    name: 'Supreme',
    price: 10.50,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    soldOut: true,
  },
  {
    name: 'Hawaian',
    price: 9.75,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    soldOut: false,
  }
  ];

})();
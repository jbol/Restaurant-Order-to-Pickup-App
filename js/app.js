(function(){
  
  /* Module */
  var app = angular.module('cafeteria', []);
  
  /* Menu Controller */
  app.controller('MenuController', function(){

  	this.menu = menuitems;
  });

  /* Ordering Controller */
  app.controller('OrderController', function(){
    
    this.order = [];

    this.addToOrder = function(item){
      product.order.push(this.item);

    };
    
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
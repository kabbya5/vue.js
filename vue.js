new Vue({
  el: ".element",
  data:{
    title: "I live in bangladesh",
    isIttrue: true,
    car:[
      'ford',
      'toyota',
      'lamborgini',
    ],
    object:{
      name: 'man',
      age: 32,
      city: 'bangladesh',
    },
    gretting: ()=> {
       return "hello world";
    },
    hello(){
      return this.title;
    },
    add(){
      return this.title + " " + this.car[2];
    }
  },
  methods:{
    green: function(){
      return " hello vue"

    }
  }
});

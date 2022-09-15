new Vue({
    el:'#vue-app',
    data:{
      title:"Hello",
      link:"https://www.google.com/", 
      name:"shubham",
      finishedLink:'<a href="https://www.google.com/">Google</a>',
      count:0,
      x:0,
      y:0
    },
    methods:{
      chnageTitile:function (event) {
        this.title=event.target.value;
      },
      sayName:function(){
        this.name = "singh!"
        return this.name;
      },
      incrmentCount:function(e){
        this.count+=e;
      },
      updateCoordinate:function(e){
        this.x=e.clientX;
        this.y=e.clientY;
      }
    }

});
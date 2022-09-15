new Vue({
    el:'#vue-app',
    data:{
      title:"Hello",
      link:"https://www.google.com/", 
      name:"shubham",
      finishedLink:'<a href="https://www.google.com/">Google</a>'
    },
    methods:{
      chnageTitile:function (event) {
        this.title=event.target.value;
      },
      sayName:function(){
        this.name = "singh!"
        return this.name;
      }
    }

});
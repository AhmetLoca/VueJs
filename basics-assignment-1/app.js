const app = Vue.createApp({
  data(){
    return {
      firstName : "Ahmet",
      age : 25,
      imageUrl : "https://google.com"
    };
  },
  methods: {
    calculateAge(){
      return this.age + 5;
    },
    calculateRandom(){
      return Math.random().toFixed(2)
    }
  }

});
app.mount("#assignment");
const app = Vue.createApp({
  data(){
    return {
      enteredValue : '', 
      task : []
    };
  },
  methods: {
    addTask(){
    this.tasks.push(this.enteredValue);
   }
  }

});
app.mount('#assignment');
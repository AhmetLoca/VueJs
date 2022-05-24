const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : '',
      confirmedName : ''
    };
  },
  methods : {
      confirmInput(){
        this.confirmedName = this.name;
      },
      submitForm(event){
        alert('Submitted!');
      },
      setName(event, lastName){
        this.name = event.target.value + ' ' + lastName; //vanillaJS
      },
      add(num){
      this.counter = this.counter + num;
      // this.counter++;    
    },
    remove(){
      this.counter--;
      //this.counter = this.counter -1;
    }
  }
});
app.mount('#events');

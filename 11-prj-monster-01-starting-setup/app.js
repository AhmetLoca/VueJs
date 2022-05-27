function getRandomValue(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}

let currentRound = 0;

const app = Vue.createApp({
  data(){
    return{
      playerHealth: 100,
      monsterHealth: 100,
      currentRound : 0
    };
  },
  computed: {
    monsterBarStyles(){
      return {width: this.monsterHealth + '%'};
    },
    playerBarStyles(){
      return {width: this.playerHealth + '%'};
    },
    mayUseSpecialAttack(){
      return this.currentRound % 3 !== 0;
    },
    specialAttackMonster(){
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth = this.monsterHealth - attackValue;
      this.attackPlayer();
    },
  },
  methods : {
    attackMonster(){
    this.currentRound++;
    const attackValue = getRandomValue(5, 12);
    this.monsterHealth = this.monsterHealth - attackValue;  
    this.attackPlayer();
    },
    attackPlayer(){
      const attackValue = getRandomValue(8, 15);
      this.playerHealth = this.playerHealth - attackValue; 
      }
  }
});
app.mount("#game");
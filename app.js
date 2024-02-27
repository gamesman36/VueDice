const vm = Vue.createApp({
    data() {
        return {
            die1: 6,
            die2: 6,
        }
    },
    methods: {
        rollDice() {
            let firstRandom = Math.floor(Math.random() * 6) + 1;
            let secondRandom = Math.floor(Math.random() * 6) + 1;
            this.die1 = firstRandom;
            this.die2 = secondRandom;
        }
    }
}).mount("#app");
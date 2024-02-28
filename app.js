const vm = Vue.createApp({
    data() {
        return {
            die1: 6,
            die2: 6,
            ones: 0,
            deuces: 0,
            threes: 0,
            fours: 0,
            fives: 0,
            sixes: 0,
            total: 0,
            numRolls: 10,
        }
    },
    computed: {
        totalRolls() {
            return this.ones + this.deuces + this.threes + this.fours + this.fives + this.sixes;
        },
        percentages() {
            const total = this.totalRolls;
            return {
                ones: (this.ones / total) * 100,
                deuces: (this.deuces / total) * 100,
                threes: (this.threes / total) * 100,
                fours: (this.fours / total) * 100,
                fives: (this.fives / total) * 100,
                sixes: (this.sixes / total) * 100,
            };
        }
    },
    methods: {
        rollDice() {
            const rollDuration = 50;
            let rollCount = 0;

            const rollInterval = setInterval(() => {
                let firstRandom = Math.floor(Math.random() * 6) + 1;
                let secondRandom = Math.floor(Math.random() * 6) + 1;
                this.die1 = firstRandom;
                this.die2 = secondRandom;

                rollCount++;

                if(rollCount === this.numRolls) {
                    clearInterval(rollInterval);
                    this.countFinalRolls(); // Only count the roll from the completed animation
                }
            }, rollDuration);
        },
        countFinalRolls() {
            // Increment counters for each roll
            this.countRoll(this.die1);
            this.countRoll(this.die2);

            if (this.die1 === this.die2) {
                // If it's a double, increment the corresponding counter by 2
                this.countRoll(this.die1);
            }
        },
        countRoll(number) {
            switch (number) {
                case 1:
                    this.ones++;
                    break;
                case 2:
                    this.deuces++;
                    break;
                case 3:
                    this.threes++;
                    break;
                case 4:
                    this.fours++;
                    break;
                case 5:
                    this.fives++;
                    break;
                case 6:
                    this.sixes++;
                    break;
            }
        }
    }
}).mount("#app");
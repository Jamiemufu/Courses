new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        enemyHealth: 100,
        gameRunning: false,
    },
    methods: {
        startGame: function () {
            this.gameRunning = true
            this.playerHealth = 100
            this.enemyHealth = 100
        },
        attack: function () {
            this.enemyHealth -= this.calcDamage(3, 10)
            if(this.checkWin()) {
                return
            }

            this.playerHealth -= this.calcDamage(4,9)
            if(this.checkWin()) {
                return
            }
        },
        specialAttack: function () {
            this.enemyHealth -= this.calcDamage(6, 20)
            if(this.checkWin()) {
                return
            }

            this.playerHealth -= this.calcDamage(9, 18)
            if(this.checkWin()) {
                return
            }
        },
        heal: function () {
            if (this.playerHealth >= 95) {
                this.playerHealth = this.playerHealth
            } else if (this.playerHealth < 95) {
                this.playerHealth += 10
            }
        },
        giveUp: function () {
            this.playerHealth = 100
            this.enemyHealth = 100
            this.gameRunning = false
        },
        calcDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },
        checkWin: function () {
            if (this.enemyHealth <= 0) {
                if (confirm('You won, New Game?')) {
                    this.startGame()
                } else {
                    this.gameRunning = false
                }
                return true
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost, New game?')) {
                    this.startGame();
                } else {
                    this.gameRunning = false
                }
                return true
            }
            return false
        }

    }
});

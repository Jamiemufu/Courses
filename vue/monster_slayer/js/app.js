new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        enemyHealth: 100,
        gameRunning: false,
        logs: [],
    },
    methods: {
        startGame: function () {
            this.gameRunning = true
            this.playerHealth = 100
            this.enemyHealth = 100
            this.logs = []
        },
        attack: function () {
            let damage = this.calcDamage(3, 10)
            this.enemyHealth -= damage

            this.addLogs('Player hits for', true, damage)

            if(this.checkWin()) {
                return
            }

            damage = this.calcDamage(3, 10)
            this.playerHealth -= damage

            this.addLogs('Monster hits for', false, damage)

            if(this.checkWin()) {
                return
            }
        },
        specialAttack: function () {
            let damage = this.calcDamage(6, 20)
            this.enemyHealth -= damage

            this.addLogs('Player special attacks for', true, damage)

            if(this.checkWin()) {
                return
            }
            damage = this.calcDamage(9, 18)
            this.playerHealth -= damage

            this.addLogs('Monster special attacks for', false, damage)

            if(this.checkWin()) {
                return
            }
        },
        heal: function () {            
            if (this.playerHealth >= 95) {
                this.playerHealth = this.playerHealth
            } else if (this.playerHealth < 95) {
                this.playerHealth += 10
                this.addLogs('Player heals for', true, 10)
            }
        },
        giveUp: function () {
            this.playerHealth = 100
            this.enemyHealth = 100
            this.gameRunning = false
            this.logs = []
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
        },
        addLogs: function(message, player, action) {
            this.logs.unshift({
                isPlayer: player,
                text: message + ' ' + action
            })
        }

    }
});

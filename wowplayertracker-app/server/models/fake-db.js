const Player = require('./player');

class FakeDb {
    constructor() {
        this.players = [{
            name: 'Rezzy',
            server: 'Tichondrius',
            rank:'Officer',
            role:'DPS'
        },
        {
            name: 'Bashlul',
            server: 'Tichondrius',
            rank:'Officer',
            role:'DPS'
        },
        {
            name: 'Raisauce',
            server: 'Tichondrius',
            rank:'Officer',
            role:'DPS'
        },
        {
            name: 'Arikin',
            server: 'Tichondrius',
            rank:'Officer',
            role:'DPS'
        },
        {
            name: 'Rayhaanqt',
            server: 'Tichondrius',
            rank:'Officer',
            role:'DPS'
        },
        {
            name: 'Rukawa',
            server: 'Tichondrius',
            rank:'Officer',
            role:'DPS'
        },
        {
            name: 'Wercho',
            server: 'Tichondrius', 
            rank:'Officer',
            role:'DPS'
        },
        {
            name: 'Moneymastery',
            server: 'Tichondrius', 
            rank:'Officer',
            role:'DPS'
        } 
        
       ];
    }

    async cleanDB() {
        await Player.remove({});
    }

    pushPlayersToDB() {
        this.players.forEach((player) => {
            const newPlayer = new Player(player);
            newPlayer.save();
        });
    }

    seedDb() {
        this.cleanDB();
        this.pushPlayersToDB();
    }
}

module.exports = FakeDb; 
const Player = require('./player'); 

class FakeDb{
    constructor(){
        this.players=[{
            name:'Rezzy', 
            server:'Tichondrius'
        },
        {
            name:'Bashlul', 
            server:'Tichondrius'
        }, 
        {
            name:'Raisauce', 
            server:'Tichondrius'
        }, 
        {
            name:'Arikin', 
            server:'Tichondrius'
        },
        {
            name:'Rayhaan', 
            server:'Tichondrius'
        },
        {
            name:'Bobiss', 
            server:'Tichondrius'
        },
    {
        name:'Wercho',
        server:'Tichondrius'
    }]; 
    }

    async cleanDB(){
        await Player.remove({}); 
    }

    pushPlayersToDB(){
        this.players.forEach((player)=>{
            const newPlayer = new Player(player); 
            newPlayer.save(); 
        }); 
    }

    seedDb(){
        this.cleanDB(); 
        this.pushPlayersToDB(); 
    }
}

module.exports = FakeDb; 
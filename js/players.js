class Player{
    constructor(name){
        this.name = name;
        this.score =  0;    
    }
}

let players = {
    player1 : null,
    player2 : null,
    initPlayer : function(firstPlayer, secondPlayer){
        this.player1 = new Player(firstPlayer);
        this.player2 = new Player(secondPlayer);
    },
    template : function(firstPlayer, secondPlayer){
        return(`
        <div id='score'>
            <div class = 'row'>
                <div class = 'col-md-1'>
                    Player
                </div>
                <div class = 'col-md-1'>
                    ${firstPlayer.name}
                </div>
                <div class = 'col-md-1'>
                    ${secondPlayer.name}
                </div>
            </div>
            <div class ='row'>
                <div class = 'col-md-1'>
                    Total
                </div>
                <div class = 'col-md-1'>
                    ${firstPlayer.score}
                </div>
                <div class = 'col-md-1'>
                    ${secondPlayer.score}
                </div>
            </div>
        </div>
    `);
    }
}
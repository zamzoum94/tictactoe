$(document).ready(()=>{
    $('#gameplay').hide();
    $('#init').html(init.template);
    $('#startGame').click(function() {
        $('#init').hide();
        let newPlayers = init.players();
        players.initPlayer(newPlayers.player1, newPlayers.player2);
        
        $('#score').html(players.template(players.player1, players.player2))
        $('#border').html(border.template);
        console.log(border.template)
        $('#gameplay').show();
    });
});


$(document).ready(()=>{
    $('#gameplay').hide();
    $('#init').html(init.template);
    $('#startGame').click(function() {
        console.log('clicked')
        let newPlayers = init.players();
        console.log(newPlayers);
        $('#gameplay').html(players.template);
        $('#gameplay').show();
    });
});


$(document).ready(()=>{
    $('#border').html(border.template);
    $('#gameplay').hide();
    $('#init').html(init.template);
    $('#startGame').click(function() {
        let newPlayers = init.players();
        players.initPlayer(newPlayers.player1, newPlayers.player2);
        $('#score').html(players.template(players.player1, players.player2))
        $('#init').hide();
        $('#gameplay').show();
        startGame();
    });
    
    $('#newRound').click(function(){
        startGame();
    });

    $('#newPlayers').click(function(){
        startGame();
        $('#gameplay').hide();
        $('#init').show();        
    });
});

let startGame = function(){
    enableAll();
    $('#newPlayers').prop('disabled', true);
    $('#newRound').prop('disabled', true);
    let turn = border.winner || players.player1.name;
    initBorder();
    $('#00').click(function(){
        $(this).prop('disabled', true);
        turn = execute($(this), turn);
    });
    $('#01').click(function(){
        $(this).prop('disabled', true);
        turn = execute($(this), turn);
    });
    $('#02').click(function(){
        $(this).prop('disabled', true);
        turn = execute($(this), turn);
    });
    $('#10').click(function(){
        $(this).prop('disabled', true);
        turn = execute($(this), turn);
    });
    $('#11').click(function(){
        $(this).prop('disabled', true);
        turn = execute($(this), turn);
    }); 
    $('#12').click(function(){
        $(this).prop('disabled', true);
        turn = execute($(this), turn);
    });
    $('#20').click(function(){
        $(this).prop('disabled', true);
        turn = execute($(this), turn);
    });
    $('#21').click(function(){
        $(this).prop('disabled', true);
        turn = execute($(this), turn);
    });
    $('#22').click(function(){
        $(this).prop('disabled', true);
        turn = execute($(this), turn);
    });
}

let initBorder = function(){
    border.game = [];
    for(let i = 0; i < 3; ++i){
        border.game.push([0, 0, 0]);
    }
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            let id = i + '' + j;
            $(`#${id}`).text('');
        }
    }
}

let execute = function(element, turn){
    let id = $(element).attr('id');
    let L = id[0];
    let C = id[1];
    if(turn === 1){
        $(`#${id}`).text('O');
        border.game[L][C] = 1;
        check(id, turn);
        return -1;
    } else{
        $(`#${id}`).text('X');
        border.game[L][C] = -1;
        check(id, turn);
        return 1;
    }
    
}

let check = function(id, turn){
    let T = turn;
    id = parseInt(id);
    let L = Math.floor(id / 10);
    let C = id % 10; 

    let count = 0;
    for(let i = 0; i < 3 && T !== null; i++){
        count = count + (border.game[L][i] === T ? 1:0);
        if(count === 3){
            weHaveOurWinner(turn);
            T = null;
        }
    }

    count = 0;
    for(let i = 0; i < 3 && T != null; i++){
        count = count + (border.game[i][C] === T ? 1:0);
        if(count === 3){
            weHaveOurWinner(turn);
            T = null;
        }
    }

    count = 0;
    for(let i = 0; i < 3 && T != null; i++){
        count = count + (border.game[i][i] === T ? 1:0);
        if(count === 3){
            weHaveOurWinner(turn);
            T = null;
        }
    }
    
    count = 0;
    for(let i = 0; i < 3 && T !== null; i++){
        count = count + (border.game[i][2-i] === T ? 1:0);
        if(count === 3){
            weHaveOurWinner(turn);
            T = null;
        }
    }
    return false;
}

let weHaveOurWinner = function(winner){
    disableAll();
    $('#newPlayers').prop('disabled', false);
    $('#newRound').prop('disabled', false);
    if(winner === 1){
        players.player1.score++;
    } else{
        players.player2.score++;
    }
    setTimeout(function(){
        if(winner === 1){
            border.winner = 1;
            alert(players.player1.name + ' Wins');
            $('#score').html(players.template(players.player1, players.player2)); 
        } else{
            border.winner = -1;
            alert(players.player2.name + ' Wins');
            $('#score').html(players.template(players.player1, players.player2));
        }
    }, 500);
}

let disableAll = function(){
    for(let i = 0; i < 3; ++i){
        for(let j = 0; j < 3; ++j){
            let id = i + '' + j;
            $(`#${id}`).prop('disabled', true);
        }
    }
}

let enableAll = function(){
    for(let i = 0; i < 3; ++i){
        for(let j = 0; j < 3; ++j){
            let id = i + '' + j;
            $(`#${id}`).prop('disabled', false);
        }
    }
}


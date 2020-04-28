let border = {
    winner : 1,
    game : null,
    count : null,
    template : `
        <div class = 'row'>
            <div class = 'col-md-2'>
              WHO IS PLAYER TURN?
            </div>
            <div class = 'col-md-2 offset-md-2'>
              ROUND ???
            </div>
        </div>
        <div class = 'row'>
            <div class='col-md-2 bordure'>
                <button class = 'btn-Game' id='00'></button>
            </div>
            <div class='col-md-2 bordure'>
                <button class = 'btn-Game' id='01'></button>
            </div>
            <div class='col-md-2 bordure'>
                <button class = 'btn-Game' id='02'></button>
            </div>
        </div>
        <div class = 'row'>
            <div class='col-md-2 bordure'>
                <button class = 'btn-Game' id='10'></button>
            </div>
            <div class='col-md-2 bordure'>
                <button class = 'btn-Game' id='11'></button>
            </div>
            <div class='col-md-2 bordure'>
                <button class = 'btn-Game' id='12'></button>
            </div>
        </div>
        <div class = 'row'>
            <div class='col-md-2 bordure'>
                <button class = 'btn-Game' id='20'></button>
            </div>
            <div class='col-md-2 bordure'>
                <button class = 'btn-Game' id='21'></button>
            </div>
            <div class='col-md-2 bordure'>
                <button class = 'btn-Game' id='22'></button>
            </div>
        </div>
        <div class = 'row'>
            <div class= 'col-md-2'>
                <input type = 'button' value ='New Round' id='newRound' disabled/>
            </div>
            <div class= 'col-md-2 offset-md-2'>
                <input type = 'button' value ='Stop Playing' id='newPlayers' disabled/>
            </div>
        </div>
    `
}
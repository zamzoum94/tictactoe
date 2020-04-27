let init = {
    template : 
        `<div class="container">
            <div class="row">
                <div class = "col-md-1 offset-md-4">
                    <p>Player 1</p>
                </div>
                <div class="col-md-2">
                    <input type="text" id="playerOneInput"/>
                </div>    
            </div>
            <div class="row">
                <div class = "col-md-1 offset-md-4">
                    <p>Player 2</p>
                </div>
                <div class="col-md-2">
                    <input type="text" id="playerTwoInput"/>
                </div>    
            </div>
            <div class="row">
                <div class = "col-md-1 offset-md-4">
                    <input type="button" value="submit" id="startGame">
                </div>
            </div>
        </div>`
    ,
    players : function(){
        let player1 = $('#playerOneInput').val().trim();
        let player2 = $('#playerTwoInput').val().trim();
        // Trusting user, no check for the moment => to do
        return {
            player1 : player1,
            player2 : player2
        }
    }
}
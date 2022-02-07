
function SudokuBoard() {


    function CreateBoard() {
        var board = document.getElementById('SudokuBoard');
        document.createElement("input");
        for (var i = 0; i < 9; i++) {
            board.appendChild(document.createElement("input"));
            
        }
    }
    
    CreateBoard();
    return (
        <div id="SudokuBoard" className="SudokuBoard">
        </div>
            
    );
    

} export default SudokuBoard;
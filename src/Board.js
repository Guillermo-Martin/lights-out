import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]  <-- GCM: each array in the array is a row
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5
  }

  // GCM: constructor to hold state; not yet defined
  constructor(props) {
    super(props);

    // TODO: set initial state
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    let cells = [];
    // TODO: create array-of-arrays of true/false values

    // create cells
    for(let j = 0; j < this.props.ncols; j++) {
      cells.push(<td><Cell /></td>);
    }

    // create rows to hold the cells
    for(let i = 0; i < this.props.nrows; i++) {
      board.push(<tr>{cells}</tr>);
    }
    
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won

    // GCM:  hasWon state not defined yet
    // this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {
    return(
      <div>
        {/* {this.createBoard()} */}
        {/* <Cell isLit={false} /> */}
        {/* <Cell isLit={true} /> */}
        <table>
          <tbody>
            {this.createBoard()}
          </tbody>
        </table>
      </div>
    )
    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board

    // TODO
  }
}


export default Board;

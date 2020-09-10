import './index.css';
import initial from './initial';
// import Player from './components/Player/Player';

//here goes everything what went to INDEX PREVIOUSLY, ALL THE FUNCTIONS 

  //helper function 

  const playerScores = ( state, { player } ) => { 
    return {
      ...state,
      player1: player === 1 ? state.player1 + 1 : state.player1, 
      player2: player === 2 ? state.player2 + 1 : state.player2 
    }
  }

//  The server should start to alternate every two serves if both scores get to 20

const alternate = state => (state.player1 === 20 && state.player2 === 20) ? 2 : 5;

  const server = state => {
    return {
      ...state,
      serving: (Math.floor((state.player1 + state.player2)/alternate(state)) % 2) + 1 
      // dodajemy obie wartosci, dzielimy na 2. np. 3+ 4 = 7 / 5
      // module przez dwa, i dopiero wtedy //math.floor is zaokragla wartosc; 
      //sprawdz divider; jesli nie do zera, to zostaje serwowac 2. 
    }
  }

  //return a number // return a version of a state . 
  // i always want to take into functions state or action 
//they return functions

//did somone won???
const winning = state => state.player1 === 21 || state.player2 === 21; 

//who is winning? 
const getWinner = state => state.player1 > state.player2 ? 1 : 2; 

const difference = state => 
  (Math.abs(state.player1 - state.player2) >= 2);

const winner = state => ({ 
  ...state,
  //this is where we get winner:  
  winner: difference(state) && winning(state) ? getWinner(state) : null ,
})

//dispatching the action 
const reducer = (state, action ) => {
    switch (action.type) {
                      //keep adding functions!!!
      case "PLAYER_SCORES": return winner(server(playerScores(state, action)));
      // case "PLAYER2_SCORES": return winner(server(playerScores(state)));
      case "RESET" : return initial;
      default: return state;
    }
  }

export default reducer;
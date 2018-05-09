//this file contains all of our components so index.js can look into one sigular place
//to update

import React, { component } from 'react';
import CardColumn from './card-column';
import NewCardInput from './new-card-input';


class Trillo extends Component {        //extends is inheritence
    constructor(props){
        super(props);
        this.handleCardDelete= this.handleCardDelete.bind(this);
        this.handleCardFinish = this.handleCardFinish.bind(this);
    }

    handleCardDelete() {


    }

    handleCardFinish() {

    }

    sortCardsByCompletion(array) {
      const completedCards = array.filter(card => card.is_completed);
      const uncompletedCards= array.filter(card => !card.is_completed);

      return{
          completedCards.
          uncompletedCards
      }
    }
    getCards(){
      fetch('/cards' )
      .then((response) => {
        response.json().then((json) =>{
            const cards = this.sortCardsByCompletion(json);
            console.log(cards);
            this.setState({
              completedCards: cards.completedCards,
              uncompletedCards: cards.uncompletedCards
            })
        })
      })
    }

    componentDidMount() {
        this.getCards();
    }

    render() {
        return (
          <div>
          <h1>Trillo</h1>
          <p><i> A honeybadger project</i></p>
          <NewCardInput /> //how to pass a component in react
          <CardColumn
            heading={'todo'}
            handleCardDelete={this.handleCardDelete}
            handleCardFinish={this.handleCardFinish}
            cards={this.state.uncompletedCards};
          />

          <CardColumn
            heading={'done'}
            handleCardDelete={this.handleCardDelete}
            handleCardFinish={this.handleCardFinish}
            cards={this.state.completedCards}
          />
          </div>
      )
    }
};


export default Trillo;

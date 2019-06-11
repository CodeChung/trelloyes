import React from 'react';
import Card from './Card';
import STORE from './store';
import './List.css';

class List extends React.Component {
    render() {
        const cardMap = STORE.allCards;
        const cards = this.props.cards.map((card, index) => {
            return <Card key={index} title={cardMap[card].title} content={cardMap[card].content}/>
        })
        return (
            <section className='List'>
                <header className='List-header'><h2>{this.props.header}</h2></header>
                <div className='List-cards'>
                    {cards}
                    <button className='List-add-button'>+ Add Random Card</button>
                </div>
            </section>
        )
    }
}

export default List;
import React from 'react'
import MoveCardToList from './MoveCardToList'

const Card = ({ card = {}, listId }) => (
  <article className="Card">
    <h3>{card.title}</h3>
    <div className="Card-description">{card.description}</div>
    <MoveCardToList cardId={card.id} listId={listId} />
  </article>
)

export default Card

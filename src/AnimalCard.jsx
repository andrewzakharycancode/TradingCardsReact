import React from 'react'
import './AnimalCardStyling.css';

export default function AnimalCard(props) {
  let cardStyle = {
    backgroundColor : props.animal.bubbleColor,
    color : props.animal.textColor
  };

  return (
    <div className="Card" style={cardStyle} onClick={() => props.showName(props.animal.name["name-EUen"])}>
      <h1 className="Card-name">{props.animal.name["name-EUen"]}</h1>

      <img className="Card-image" src={props.animal.imageUri}
      alt="portrait"/>

      <dl className="Card-details">
        <dt>Birthday</dt>
        <dd>{props.animal.birthdayString}</dd>
        <dt>Hobby</dt>
        <dd>{props.animal.hobby}</dd>
        <dt>Catchphrase</dt>
        <dd>{props.animal.catchphrase}</dd>
      </dl>
    </div>
  )
}

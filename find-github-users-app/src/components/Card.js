import React from 'react'

const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
      <img width='75' src={props.avatar_url} alt='github avatar' />
      <div style={{ display: 'inline-block', marginLeft: 10 }}>
        <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>
          {props.name}
        </div>
        <div>
          {props.company}
        </div>
        <div style={{fontSize: '0.75em'}}>
          {props.location}
        </div>
      </div>
    </div>
  )
}

export default Card

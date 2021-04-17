import React from 'react';
import './Card.css'

// import { Container } from './styles';

export default (props) => {

    const cardStyle = {
        backgroundColor : props.tt || '#F00',
        borderColor: props.tt || '#F00'
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className='Title'>{props.titulo}</div>
            <div className='Content'>
                {props.children}
            </div>

        </div>
    )
}
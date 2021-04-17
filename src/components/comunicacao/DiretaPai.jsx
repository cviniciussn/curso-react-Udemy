import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>

            <DiretaFilho nome='Junior' idade={20} nerd={true} />
            <DiretaFilho nome='Daniel' idade={17} nerd={false} />

        </div>
    )
}
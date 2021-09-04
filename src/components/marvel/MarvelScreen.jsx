import React from 'react'
import HeroLists from '../heroes/HeroLists'

const MarvelScreen = () => {
    console.log('alc');
    return (
        <div>
            marvel screen
            <hr />
            {<HeroLists publiser="Marvel Comics"/>}
        </div>
    )
}

export default MarvelScreen

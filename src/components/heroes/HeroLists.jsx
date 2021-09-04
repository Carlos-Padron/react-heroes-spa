import React, { useMemo } from 'react'
import { getHeroeByPublisher } from '../selectors/getHeroeByPublisher'
import HeroCard from './HeroCard'

const HeroLists = ({publiser}) => {
    

    const heroes = useMemo(() => getHeroeByPublisher(publiser), [publiser])
    //getHeroeByPublisher(publiser)

    

    return (
        <div className="card-columns">
                {
                    heroes.map(hero =>{
                       return <HeroCard key={hero.id} {...hero} />
                    })
                }
        </div>
    )
}

export default HeroLists

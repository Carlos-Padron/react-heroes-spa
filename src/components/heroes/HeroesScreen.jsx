import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroeById } from "../selectors/getHeroesById";

const HeroesScreen = ({ history }) => {
  const { heroId } = useParams();
  
  const hero = useMemo(() => getHeroeById(heroId), [heroId]);
  //const hero = getHeroeById(heroId);

  console.log(hero);
  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={`../assets/${heroId}.jpg`} alt="" />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <button onClick={() => handleReturn()}>return</button>
      </div>
    </div>
  );
};

export default HeroesScreen;

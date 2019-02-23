import React, { useEffect, useState } from 'react';

const HelloRickAndMorty = () => {
  const [character, useCharacters] = useState({
    name: null,
    avatar: null,
  });

  let persons;

  useEffect(() => {
    persons = fetch('https://rickandmortyapi.com/api/character/1')
      .then(function (response) {
        return response.json();
      })
      .then(function (myData) {
        useCharacters({
          name: myData.name,
          avatar: myData.image,
        })
      });
  }, []);

  return character.name === null ? (<h1>Cargando...</h1>) : (
    <>
      <p>{character.name}</p>
      <img src={character.avatar} alt={character.name} />
    </>
  )
}

export default HelloRickAndMorty;
import React, { useEffect, useState } from 'react';

const HelloRickAndMorty = () => {
  const [characters, useCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => useCharacters(data.results));
  }, []);

  return (
    <>
      {characters.map(character => (
        <div>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </>
  );
}

export default HelloRickAndMorty;
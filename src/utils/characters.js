import { useState, useEffect } from "react";

const getCharacters = (url) => {
  const [character, useCharacters] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => useCharacters(data.results));
  }, []);

  return character;
}

export default getCharacters;
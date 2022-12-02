import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [castInfo, setCastInsfo] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    fetch(
      `
https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=512c087cc4e125c35b75be5dc92e5782&language=en-US`
    )
      .then(response => response.json())
      .then(res => setCastInsfo(res));
  }, [movieId]);

  return (
    castInfo && (
      <div>
        <ul>
          {castInfo.cast.map(e => (
            <li key={e.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${e.profile_path}`}
                alt={e.name}
              />
              <h4>{e.name}</h4>
              <p>Character: {e.character}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Cast;

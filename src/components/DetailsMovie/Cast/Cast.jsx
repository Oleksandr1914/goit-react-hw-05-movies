import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContainerCast, ListCast } from '../DetailsMovieStyled';

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
      <ContainerCast>
        <ListCast>
          {castInfo.cast.map(e => {
            return (
              <li key={e.id}>
                <img
                  src={
                    e.profile_path
                      ? `https://image.tmdb.org/t/p/w200${e.profile_path}`
                      : `https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png`
                  }
                  alt={e.name}
                  style={{ width: '150px', height: '220px' }}
                />
                <h4>{e.name}</h4>
                <p>Character: {e.character}</p>
              </li>
            );
          })}
        </ListCast>
      </ContainerCast>
    )
  );
};

export default Cast;

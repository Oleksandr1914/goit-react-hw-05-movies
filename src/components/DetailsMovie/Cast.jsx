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
          {castInfo.cast.map(e => {
            return (
              <li key={e.id}>
                <img
                  src={
                    e.profile_path
                      ? `https://image.tmdb.org/t/p/w200${e.profile_path}`
                      : `https://media.istockphoto.com/id/1191260149/vector/sunglasses-emoticon-with-big-smile.jpg?s=612x612&w=0&k=20&c=fiv2tpNsvT0NqhOLQiC2A8NbVlGEZJR9YTvl8JIDpis=`
                  }
                  alt={e.name}
                  style={{ width: '200px' }}
                />
                <h4>{e.name}</h4>
                <p>Character: {e.character}</p>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
};

export default Cast;

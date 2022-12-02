import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from './DetailsMovieStyled';

const Reviews = () => {
  const [reviews, setRevies] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `
https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=512c087cc4e125c35b75be5dc92e5782&language=en-US`
    )
      .then(response => response.json())
      .then(res => setRevies(res));
  }, [movieId]);

  return (
    reviews &&
    (reviews.results.length !== 0 ? (
      <div>
        <ReviewsList>
          {reviews.results.map(e => (
            <li key={e.id}>
              <h5>Author: {e.author}</h5>
              <p>{e.content}</p>
            </li>
          ))}
        </ReviewsList>
      </div>
    ) : (
      <p>We don`t have any reviews for this movie.</p>
    ))
  );
};

export default Reviews;

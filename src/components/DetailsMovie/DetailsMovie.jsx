import { useState, Suspense, useEffect } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { Box, Container, ToBack, BoxReviews } from './DetailsMovieStyled';

let serchLocation = '';

const DetailsMovie = () => {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  if (location.state) {
    serchLocation = location.state.from;
  }

  useEffect(() => {
    fetch(
      `
https://api.themoviedb.org/3/movie/${movieId}?api_key=512c087cc4e125c35b75be5dc92e5782&language=en-US`
    )
      .then(response => response.json())
      .then(res => setMovieData(res));
  }, [movieId]);

  return (
    movieData && (
      <Container>
        <ToBack>
          <Link to={serchLocation}>Go to back</Link>
        </ToBack>
        <Box>
          <img
            src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`}
            alt={movieData.title}
          />
          <div>
            <h2>{movieData.title}</h2>
            <p>User Score: {movieData.vote_average}%</p>
            <h3>Overview</h3>
            <p>{movieData.overview}</p>
            <h3>Genres</h3>
            {movieData.genres.map(e => (
              <span key={e.id}> {e.name}</span>
            ))}
          </div>
        </Box>
        <>
          <BoxReviews>
            <NavLink to="cast">Cast</NavLink>
            <NavLink to="reviews">Reviews</NavLink>
          </BoxReviews>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      </Container>
    )
  );
};

export default DetailsMovie;

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, Title, Container } from './HomeStyled';

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=512c087cc4e125c35b75be5dc92e5782`
    )
      .then(response => response.json())
      .then(res => setFilms(res.results));
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      <List>
        {films.map(e => (
          <li key={e.id}>
            <Link
              to={`/movies/${e.id}`}
              state={{ from: location.pathname }}
              id={e.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}
                alt={e.title}
                style={{ width: '180px' }}
              />
              {e.title || e.name}
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Home;

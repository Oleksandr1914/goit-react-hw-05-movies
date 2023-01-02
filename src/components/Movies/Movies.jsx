import { useState, useEffect, Suspense } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Search from './Search';
import { ContainerMovies, List } from 'components/Movies/MoviesStyled';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const [searchParams] = useSearchParams();
  const name = searchParams.get('search');
  const location = useLocation();

  useEffect(() => {
    if (!name) {
      return;
    }
    fetch(
      `
  https://api.themoviedb.org/3/search/movie?api_key=512c087cc4e125c35b75be5dc92e5782&language=en-US&page=1&include_adult=false&query=${name}`
    )
      .then(response => response.json())
      .then(res => setSearchMovies(res.results));
  }, [name]);

  return (
    <ContainerMovies>
      <div>
        <Search />
        {searchMovies && (
          <List>
            {searchMovies.map(e => (
              <li key={e.id}>
                <Link
                  to={`/movies/${e.id}`}
                  state={{ from: `/movies${location.search}` }}
                  id={e.id}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}
                    alt={e.title}
                    style={{ width: '180px' }}
                  />
                  {e.title}
                </Link>
              </li>
            ))}
          </List>
        )}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </ContainerMovies>
  );
};

export default Movies;

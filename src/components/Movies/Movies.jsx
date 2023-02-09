import { MovieWrap, MovieBtn } from './Movies.styled';
import { getMovie } from 'components/helpers/Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';

const Movies = () => {
  const [movies, setMovies] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (queryParam) {
      getMovie(queryParam).then(({ data }) => setMovies(data.results));

      // (setMovies);
    }
  }, [queryParam]);

  const ChangeFilter = value => {
    setValue(value);
  };

  const onBtnSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: value });
  };

  return (
    <MovieWrap>
      <div>
        <SearchBar value={value} onChange={ChangeFilter} />
        <MovieBtn onClick={onBtnSubmit} type="submit">
          Search
        </MovieBtn>
      </div>
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </MovieWrap>
  );
};

export default Movies;

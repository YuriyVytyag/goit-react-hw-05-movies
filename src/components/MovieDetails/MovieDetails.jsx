import { getMovieDetails } from 'components/helpers/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  MovieDetailsWrapper,
  Wrapper,
  Genres,
  AddWrapper,
  BackBtn,
} from './MovieDetails.styled';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const location = useLocation();
  console.log('🚀 ~ location', location);
  const detailsLink = location.state?.from ?? '/';

  useEffect(() => {
    try {
      getMovieDetails(movieId).then(res => {
        return setDetails(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);
  // useEffect(() => {
  //   getMovieDetails(movieId).then(setDetails);
  // }, [movieId]);
  const movie = !Object.keys(details).length === 0;

  return movie ? (
    <div>
      <BackBtn>
        <Link to={detailsLink}>Go back</Link>
      </BackBtn>
      {Object.keys(details).length ? (
        <MovieDetailsWrapper>
          <img
            src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
            alt={details.title}
            width={300}
          />
          <Wrapper className="">
            <h1>{details.title}</h1>
            <p>User score: {Math.round(details.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{details.overview}</p>
            {details.genres.map(genre => {
              return <Genres key={genre.id}>{genre.name}</Genres>;
            })}
          </Wrapper>
        </MovieDetailsWrapper>
      ) : (
        ''
      )}
      <h2>Additional information</h2>
      <AddWrapper>
        <Link to={'cast'} state={{ from: detailsLink }}>
          Cast
        </Link>

        <Link to={'reviews'} state={{ from: detailsLink }}>
          Reviews
        </Link>
        <Outlet />
      </AddWrapper>
    </div>
  ) : (
    <p>There is no film you search</p>
  );
};
export default MovieDetails;

import { useEffect, useState } from 'react';
import { getMovieCredits } from 'components/helpers/Api';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(data => setCast(data.data.cast));
  }, [movieId]);
  if (!cast) {
    return;
  }
  console.log(cast);
  return (
    <div>
      {cast && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                width={150}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://via.placeholder.com/150'
                }
                alt="Actor"
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Cast;

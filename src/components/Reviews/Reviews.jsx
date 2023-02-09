import { useEffect, useState } from 'react';
import { getMovieReview } from 'components/helpers/Api';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      getMovieReview(movieId).then(res => {
        return setReviews(res.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);
  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, content, author }) => (
            <li key={id}>
              <h2>Author:{author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        'There is no reviews for this movie'
      )}
    </div>
  );
};

export default Reviews;

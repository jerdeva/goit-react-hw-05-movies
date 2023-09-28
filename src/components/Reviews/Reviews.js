import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../Api/Api';
import {
  MovieReviewsTitle,
  ReviewsItem,
  ReviewsItemAuthor,
  ReviewsItemContent,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.error(error);
      }
    };

    movieReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 && (
        <div>
          <MovieReviewsTitle>Movie Reviews</MovieReviewsTitle>
          <ul>
            {reviews.map(review => (
              <ReviewsItem key={review.id}>
                <ReviewsItemAuthor>{review.author}</ReviewsItemAuthor>
                <ReviewsItemContent>{review.content}</ReviewsItemContent>
              </ReviewsItem>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && <div>We don't have reviews for this movie.</div>}
    </>
  );
};

export default Reviews;

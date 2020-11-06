import styles from './CardBlock.scss';

import React from 'react';
import PT from 'prop-types';
import cn from 'classnames';

import withMoviesNav from 'app_hocs/withMoviesNav';
import { CardImageBlock } from
  'app_components/pages/movies-page/_blocks';

function CardBlock(props) {
  const { className, movie, printGenres, linkMovie } = props;
  const { id, title, genre_ids } = movie;

  return (
    <div
      className={cn(className, 'mx-auto')}
      onClick={() => linkMovie(id)}
    >
      <CardImageBlock
        // className={className}
        movie={movie}
      />

      <div className={styles.body}>
        <div className={cn(styles.title, 'mb-1')}>
          {title}
        </div>

        {genre_ids && printGenres({
          ids: genre_ids,
          className: cn(styles.genres, 'small')
        })}
      </div>
    </div>
  );
};

CardBlock.propTypes = {
  linkMovie: PT.func.isRequired,

  printGenres: PT.func.isRequired,
  movie: PT.shape({
    poster_path: PT.string,
    title: PT.string.isRequired,
    genre_ids: PT.array,
    vote_average: PT.number,
  }).isRequired,
};

export default withMoviesNav(CardBlock);
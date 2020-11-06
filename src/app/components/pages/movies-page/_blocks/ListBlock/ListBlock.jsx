import styles from './ListBlock.scss';

import React from 'react';
import PT from 'prop-types';

import { CardBlock } from 'app_components/pages/movies-page/_blocks';

function ListBlock(props) {
  const { movies, printGenres } = props;

  if (!movies || movies.length < 1) return null;

  return (
    <div className={styles.grid}>
      {movies.map((movie) =>
        <CardBlock
          key={movie.id}
          className={styles.card}
          printGenres={printGenres}
          movie={movie}
        />)}
    </div>
  );
};

ListBlock.propTypes = {
  movies: PT.array,
  printGenres: PT.func
};

ListBlock.defaultProps = {
  printGenres: () => { }
}

export default ListBlock;
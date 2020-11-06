import styles from './CardImageBlock.scss';

import React from 'react';
import PT from 'prop-types';
import { withTranslation } from 'react-i18next';

import { TMDB_IMAGE_URL } from 'app_config';
import { CardRatingBlock } from
  'app_components/pages/movies-page/_blocks';

function CardImageBlock(props) {
  const { t, movie } = props;
  const { poster_path, vote_average } = movie;

  return (
    <div className={styles.wrapper}>
      {poster_path
        ? (
          <img
            className={styles.image}
            src={`${TMDB_IMAGE_URL.medium}/${poster_path}`}
          />
        )
        : (
          <div className={styles['no-image-text']}>
            {t('movie_list.empty_poster')}
          </div>
        )
      }

      <CardRatingBlock {...{ vote_average }} />
    </div>
  );
};

CardImageBlock.propTypes = {
  t: PT.func.isRequired,

  movie: PT.shape({
    poster_path: PT.string,
    vote_average: PT.number,
  }).isRequired
};

export default withTranslation()(CardImageBlock);
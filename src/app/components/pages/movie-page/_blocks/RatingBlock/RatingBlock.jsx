import styles from './RatingBlock.scss';

import React from 'react';
import PT from 'prop-types';
import { withTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function RatingBlock({ t, data }) {
  const { vote_average, vote_count } = data;

  if (!vote_average) return null;

  return (
    <div className={styles.wrapper}>
      <div>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faStar}
        />
        {vote_average}
        <span className={styles.scale}>
          /10
        </span>
      </div>

      {vote_count > 0 && (
        <div className={styles.votes}>
          <span>
            {vote_count}
          </span>

          <span className="ml-1">
            {t('movie_details.rating_votes.count', { count: vote_count })}
          </span>
        </div>
      )}
    </div>
  );
};

RatingBlock.propTypes = {
  t: PT.func.isRequired,

  data: PT.shape({
    vote_average: PT.number,
    vote_count: PT.number
  }).isRequired
};

export default withTranslation()(RatingBlock);
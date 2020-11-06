import styles from './SearchResultsBlock.scss';

import React from 'react';
import PT from 'prop-types';
import cn from 'classnames';

import PTS from 'app_services/PropTypesService';
import { withTranslation } from 'react-i18next';
import { Row } from 'app_components/layout';

function SearchResultsBlock({ t, search, total }) {
  if (total == null || !search) return null;

  const quotes = (<span className={styles.quotes}>"</span>);

  return (
    <Row cls={cn(styles.wrapper, 'mb-lg-2')}>
      <span>
        {t('movie_search.found.count', { count: total })}
      </span>

      <span className={styles.highlight}>
        {total}
      </span>

      <span>
        {t('movie_search.movie.count', { count: total })}
      </span>

      <span>
        {t('movie_search.by_title')}
      </span>

      <span className={styles.highlight}>
        {quotes}{search}{quotes}
      </span>
    </Row>
  );
};

SearchResultsBlock.propTypes = {
  t: PT.func.isRequired,
  search: PT.string,
  total: PTS.nullOrNumber
};

export default withTranslation()(SearchResultsBlock);
import styles from './ToolbarBlock.scss';

import React from 'react';
import PT from 'prop-types';
import { Button, ButtonGroup } from "reactstrap";
import { withTranslation } from 'react-i18next';

import { TMDB_MOVIES_TYPES } from 'app_config';
import withMoviesNav from 'app_hocs/withMoviesNav';

function ToolbarBlock({ t, activeMoviesType, changeMoviesType }) {
  return (
    <ButtonGroup className={styles.group}>
      {TMDB_MOVIES_TYPES.map((filter, index) => (
        <Button
          key={index}
          className={styles.button}
          color={(activeMoviesType == filter.key)
            ? 'dark'
            : 'light'}
          onClick={() => changeMoviesType(filter.key)}
        >
          {t(`movie_types.${filter.key}`)}
        </Button>
      ))}
    </ButtonGroup>
  );
}

ToolbarBlock.propTypes = {
  t: PT.func.isRequired,
  changeMoviesType: PT.func.isRequired,
  activeMoviesType: PT.string.isRequired
};

export default withTranslation()(withMoviesNav(ToolbarBlock));
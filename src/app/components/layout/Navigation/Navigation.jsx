import styles from './Navigation.scss';

import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import qs from 'query-string';

import { redirect } from 'app_history';
import { getDefaulQueryParams, getQueryParams } from 'app_services/UtilsService';
import { NavToggle, LocaleDropdown, SearchForm } from 'app_components/layout/Navigation/_blocks/';
import { resetMovies, getMovies } from 'redux_actions';

const Navigation = () => {
  const dispatch = useDispatch();

  const goHome = (e) => {
    e.preventDefault();
    const { lng } = getQueryParams();

    let requestParams = {
      ...getDefaulQueryParams(),
      lng
    };

    dispatch(resetMovies());
    dispatch(getMovies(requestParams));
    redirect(`/?${qs.stringify({ lng })}`);
  }

  return (
    <nav className={cn(styles.navigation, 'navbar navbar-expand-sm navbar-dark')}>
      <div className="container p-0">
        <a
          className={styles.link}
          onClick={(e) => goHome(e)}
          href="/"
        >
          <FontAwesomeIcon
            className="mr-1"
            icon={faFilm} />
              Movies
          </a>

        <NavToggle>
          <SearchForm />
          <LocaleDropdown />
        </NavToggle>

      </div>
    </nav>
  );
}

export default Navigation;
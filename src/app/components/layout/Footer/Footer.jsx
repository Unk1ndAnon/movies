import styles from './Footer.scss';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import cn from 'classnames';

import tmdbLogo from 'app_assets/img/tmdb_logo.svg';

const Footer = () => {
  return (
    <footer className={cn(styles.footer, 'font-small')}>
      <div className="text-center py-3">
        <div className={cn(styles.wrapper, 'mr-2')}>
          <span>© 2020,</span>
          <a
            className={styles.link}
            href="https://github.com/nk11dev"
            target="_blank"
          >
            <FontAwesomeIcon
              className="mx-1"
              icon={faGithub} />
                nk11dev
          </a>
          <span>;</span>
        </div>

        <div className={cn(styles.wrapper, styles.logo)}>
          <a
            className={styles.link}
            href="https://www.themoviedb.org/"
            target="_blank"
          >
            API powered by
          <img className="ml-1" src={tmdbLogo} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
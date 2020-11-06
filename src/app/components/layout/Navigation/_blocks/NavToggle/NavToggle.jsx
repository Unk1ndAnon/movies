import styles from './NavToggle.scss';

import React from 'react';
import cn from 'classnames';

const NavToggle = (props) => {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse" data-target="#moviesNavbarToggle"
        aria-controls="moviesNavbarToggle"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div
        className="collapse navbar-collapse"
        id="moviesNavbarToggle"
      >
        <div className={cn(styles.toggle, 'row')}>
          {props.children}
        </div>
      </div>
    </>
  );
}

export default NavToggle;
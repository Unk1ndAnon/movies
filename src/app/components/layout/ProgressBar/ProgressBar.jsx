// import 'app_components/layout/ProgressBar/ProgressBar.scss';
import styles from './ProgressBar.scss';

import React from 'react';
import cn from 'classnames';

export default function ProgressBar() {
  return (
    <div className={cn(styles.wrapper, 'progress')}>
      <div className={cn(styles.bar, 'progress-bar')} />
    </div>
  );
};
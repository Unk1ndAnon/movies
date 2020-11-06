import styles from './PagingBlock.scss';

import React from 'react';
import PT from 'prop-types';
import cn from 'classnames';
import ReactPaginate from "react-paginate";

import PTS from 'app_services/PropTypesService';
import withMoviesNav from 'app_hocs/withMoviesNav';

function PagingBlock({ className, initialPage, pageCount, linkPage }) {
  return (
    <ReactPaginate
      previousLabel="<-"
      nextLabel="->"
      breakLabel="..."
      breakClassName="break-me"
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={linkPage}
      disableInitialCallback={true}
      initialPage={initialPage}
      forcePage={initialPage}
      containerClassName={cn(styles.paging, className, 'pagination')}
      activeClassName={styles.active}

      // we need specify that classes because of bootstrap reboot styles (for not to override them)
      pageLinkClassName={styles.link}
      previousLinkClassName={styles.link}
      nextLinkClassName={styles.link}
      breakLinkClassName={styles.link}
    />
  );
};

PagingBlock.propTypes = {
  className: PT.string,
  linkPage: PT.func.isRequired,

  initialPage: PT.number.isRequired,
  pageCount: PTS.nullOrNumber
};

export default withMoviesNav(PagingBlock);
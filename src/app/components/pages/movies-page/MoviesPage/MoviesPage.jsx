import './MoviesPage.scss';

import React from 'react';
import PT from 'prop-types';
import b_ from 'b_';

import PTS from 'app_services/PropTypesService';
import { isNotEmpty } from 'app_services/UtilsService';
import { Row, Column } from 'app_components/layout';
import { MListContextProvider } from 'app_contexts/MListContext';
import { ToolbarBlock, PagingBlock, ListBlock } from
  'app_components/pages/movies-page/_blocks';
import { ProgressBar } from 'app_components/layout';

function MoviesPage({ data_toolbar, data_paging, data_genresContext, data_moviesList }) {

  // base component class
  const cls_base = 'movies-list';
  const b = b_.with(cls_base);

  const { isLoading, error, movies } = data_moviesList;
  const hasMovies = isNotEmpty(movies);

  return (
    <div className={b()}>

      <Row cls="mb-2">
        <ToolbarBlock {...data_toolbar} />
      </Row>

      {hasMovies
        ? <Row cls="mb-2">
          <PagingBlock {...data_paging} />
        </Row>
        : ''}

      <MListContextProvider {...data_genresContext}>
        <Row>
          {error && <p>{error}</p>}

          {isLoading && <ProgressBar />}

          {hasMovies
            ? <ListBlock movies={movies} />
            : ''}
        </Row>
      </MListContextProvider>
    </div>
  );
};

MoviesPage.propTypes = {
  data_toolbar: PT.shape({
    handleFilter: PT.func.isRequired,
    activeFilter: PT.string
  }).isRequired,

  data_paging: PT.shape({
    initialPage: PT.number.isRequired,
    pageCount: PTS.nullOrNumber,
    onPageChange: PT.func.isRequired
  }).isRequired,

  data_genresContext: PT.shape({
    genres: PT.array.isRequired,
    linkMovie: PT.func.isRequired
  }).isRequired,

  data_moviesList: PT.shape({
    isLoading: PT.bool.isRequired,
    error: PTS.nullOrString,
    movies: PT.array.isRequired
  }).isRequired,
};

export default MoviesPage;
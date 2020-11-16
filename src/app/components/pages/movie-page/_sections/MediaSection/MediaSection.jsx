import './MediaSection.scss';

import React from 'react';
import PT from 'prop-types';
import cn from 'classnames';

import { withMDetailsContext } from '@/contexts';
import { Section, Row, Column } from '@/markup';
import { PlayerBlock, PosterBlock } from '@/pages/movie-page/_blocks';

function MediaSection({ context }) {
  const { movie, getTrailer } = context;
  const { poster_path } = movie;

  // classes for keeping 16by9 aspect ration
  const clsEmbed = 'embed-responsive';
  const keepAspectRatio = true;

  const trailer = getTrailer({
    site: 'YouTube',
    type: 'Trailer'
  });

  return (
    <Section
      cls="px-0 pt-1 pb-4"
      transparent={true}
    >
      <Row
        cls={cn('px-3', {
          'row--has-videos': trailer
        })}
      >
        <Column
          cls={cn('column--poster', {
            [clsEmbed]: keepAspectRatio
          })}
          size={4}
          smallFullWidth={true}
        >
          <PosterBlock
            cls={cn({
              [`${clsEmbed}-item`]: keepAspectRatio
            })}
            data={{ poster_path }}
          />
        </Column>

        <Column
          cls={cn('column--trailer', {
            [clsEmbed]: keepAspectRatio,
            [`${clsEmbed}-16by9`]: keepAspectRatio
          })}
          size={8}
          smallFullWidth={true}
        >
          <PlayerBlock {...{ trailer }} />
        </Column>
      </Row>
    </Section>
  );
}

MediaSection.propTypes = {
  context: PT.shape({
    getTrailer: PT.func.isRequired,
    movie: PT.shape({
      poster_path: PT.string
    }).isRequired
  }).isRequired
};

export default withMDetailsContext(MediaSection);
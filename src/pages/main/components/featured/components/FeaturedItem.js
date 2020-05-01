import React from 'react';
import { styled } from '@material-ui/core/styles';
import { compose, spacing } from '@material-ui/system';
import { Card } from '@material-ui/core';

const CardContainer = styled(Card)(compose(spacing));

const FeaturedItem = ({ item }) => {
  return (
    <CardContainer variant='outlined' p={2}>
      {item.id}
    </CardContainer>
  );
};

export default FeaturedItem;

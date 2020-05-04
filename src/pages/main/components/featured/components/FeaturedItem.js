import React from 'react';
import { styled } from '@material-ui/core/styles';
import { compose, spacing, flexbox, sizing } from '@material-ui/system';
import {
  Card,
  CardHeader,
  Box,
  Typography,
  CardMedia,
} from '@material-ui/core';

const CardContainer = styled(Card)(compose(spacing, sizing));
const ContentContainer = styled(Box)(compose(spacing, flexbox));

const FeaturedItem = ({ item }) => {
  return (
    <CardContainer variant='outlined' width={250} p={2}>
      <ContentContainer flexDirection='row'>
        <CardMedia src={item.imageUrl} component='img'></CardMedia>
        <CardHeader
          title={<Typography variant='h6'>{item.title}</Typography>}
          component='h6'
          disableTypography
        />
      </ContentContainer>
    </CardContainer>
  );
};

export default FeaturedItem;

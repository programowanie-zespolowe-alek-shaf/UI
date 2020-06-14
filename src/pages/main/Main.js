import React from 'react';
import { default as Featured } from './components/featured/FeaturedContainer';
import { default as LastAdded } from './components/lastAdded/LastAddedContainer';
import MainLayout from 'components/mainLayout/MainLayout';

const Main = () => {
  return (
    <MainLayout>
      <Featured />
      <LastAdded />
    </MainLayout>
  );
};

export default Main;

import React from 'react';
import Paginations from '../components/ui/Pagination';
import Search from '../components/ui/Search';
import MainLayout from '../layouts/MainLayout';
import ServicesCard from '../components/ServicesCard/ServicesCard';
import styles from '../styles/Services.module.scss';
import InformBanner from '../components/InformBanner/InformBanner';
import Categories from '../components/Categories';

const Services: React.FC = () => {
  return (
    <MainLayout>
      <div className={styles.main}>
        <Categories />
        <InformBanner />
      </div>
      <div className={styles.content}>
        <Search />
        <ServicesCard />
      </div>
      <Paginations />
    </MainLayout>
  );
};

export default Services;

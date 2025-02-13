import React from 'react';
import { useRouter } from 'next/router';

import MainLayout from 'layouts/MainLayout';

import ServicesCard from 'components/Services/ServicesCard';
import InformBanner from 'components/Services/ServicesBanner';
import Categories from 'components/Services/Categories';
import Search from 'components/ui/Search';
import Paginations from 'components/ui/Pagination';

import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { useAppSelector } from 'common/hooks/useAppSelector';

import { filterSelector } from 'redux/filter/selector';
import { selectorService } from 'redux/services/selectors';
import { fetchServices } from 'redux/services/asyncActions';
import { ServicesItem } from 'redux/services/types';

import styles from 'pages/services/Services.module.scss';

const ServicesPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { sort, categoryName, searchValue, currentPage } = useAppSelector(filterSelector);

  const { allServices, total } = useAppSelector(selectorService);

  React.useEffect(() => {
    dispatch(
      fetchServices({
        currentPage: currentPage,
        categoryName,
        searchValue,
        sort,
      })
    );
    // scroll.scrollToTop();
  }, [dispatch, currentPage, categoryName, sort, searchValue]);

  const services = allServices.map((service: ServicesItem) => (
    <ServicesCard key={service._id} service={service} />
  ));

  return (
    <MainLayout path={router.asPath} headingTitle="Услуги">
      <div className={styles.main}>
        <Categories />
        <InformBanner />
      </div>
      <div className={styles.content}>
        <Search />
        <div className={styles.cards}>{services}</div>
      </div>
      <Paginations currentPage={currentPage} productsCount={total} />
    </MainLayout>
  );
};

export default ServicesPage;

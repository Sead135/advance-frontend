import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <BugButton />
      <div>{t('Главная страница')}</div>
    </>
  );
};

export default MainPage;

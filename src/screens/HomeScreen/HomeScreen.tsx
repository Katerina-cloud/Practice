import { Typography } from '../../elements/Typography';
import { useHomeScreenStyle } from './HomeScreen.styles';

import { useTranslation } from 'react-i18next';

export const HomeScreen = () => {
  const { t, i18n } = useTranslation();
  const styles = useHomeScreenStyle();
  console.log('Current language:', i18n.language);
  // console.log('Translation resources:', i18n.store.data);
  return <Typography variant="h1">{t('home')}</Typography>;
};

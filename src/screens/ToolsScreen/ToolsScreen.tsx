import { useTranslation } from 'react-i18next';
import { Typography } from '../../elements/Typography';
import { useToolsScreenStyle } from './ToolsScreen.styles';

export const ToolsScreen = () => {
  const { t } = useTranslation();
  const styles = useToolsScreenStyle();

  return <Typography variant="h1">{t('tools')}</Typography>;
};

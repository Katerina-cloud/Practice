import { Typography } from '../../elements/Typography';
import { useHomeScreenStyle } from './HomeScreen.styles';

export const HomeScreen = () => {
  const styles = useHomeScreenStyle();

  return <Typography variant="h1">Home</Typography>;
};

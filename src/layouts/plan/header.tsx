import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import HealthLogo from 'src/components/healthLogo';
import RegisterPlanStepper from 'src/components/stepper';
import { useSettingsContext } from 'src/components/settings';

import { NAV, HEADER_PLAN as HEADER } from '../config-layout';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const settings = useSettingsContext();

  const isNavHorizontal = settings.themeLayout === 'horizontal';

  const isNavMini = settings.themeLayout === 'mini';

  const lgUp = useResponsive('up', 'lg');

  const offset = useOffSetTop(HEADER.H_DESKTOP);

  const offsetTop = offset && !isNavHorizontal;

  const renderContent = (
    // <Stack
    //   flexGrow={1}
    //   direction="row"
    //   alignItems="center"
    //   justifyContent="space-between"
    //   spacing={{ xs: 0.5, sm: 1 }}
    // >
    //   <HealthLogo />
    //   <RegisterPlanStepper />
    //   <AccountPopover />
    // </Stack>
    <Grid
      container
      spacing={2}
      flexGrow={1}
      columns={{ xs: 3, md: 3, lg: 12 }}
      gap={{ xs: 0.5, sm: 1 }}
      justifyContent="space-between"
      alignItems="center"
      justifyItems="center"
    >
      <Grid item xs={3}>
        <HealthLogo />
      </Grid>
      <Grid item xs="auto">
        <RegisterPlanStepper />
      </Grid>
      <Grid item xs={3} justifyContent="end">
        {/* <AccountPopover /> */}
      </Grid>
    </Grid>
  );

  return (
    <AppBar
      sx={{
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `100%`,
          height: HEADER.H_DESKTOP,
          ...(offsetTop && {
            height: HEADER.H_DESKTOP_OFFSET,
          }),

          ...(isNavMini && {
            width: `calc(100% - ${NAV.W_MINI + 1}px)`,
          }),
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 7 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

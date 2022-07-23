import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
// import NewApprovals from './NewApprovals';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Approvals } from '../../firebase/NewApproval';
import TableData from './Table/Table';
import TabNavigation from './TabNavigation/TabNavigation';
import TotalDetails from './TotalDetails';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const mdTheme = createTheme();

function DashboardContent() {
  const { ApprovedCompaniesArray, ApprovedStudentsArray } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    Approvals(dispatch)
  }, [])
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 350,
              }}
            >
              <TotalDetails />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 350,
              }}
            >
              <TabNavigation />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              {/* <CompanyData /> */}
              <TableData
                Title={"Registered Companies"}
                TableCellHead1={"Company Name"}
                TableCellHead2={"Email"}
                Data={ApprovedCompaniesArray}
                TableCellLinkText={"See Posted Jobs"}
                ListDilogTitle={"All Registered Companies"}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <TableData
                Title={"Registered Students"}
                TableCellHead1={"Student ID"}
                TableCellHead2={"Email"}
                Data={ApprovedStudentsArray}
                TableCellLinkText={"See Applied Jobs"}
                ListDilogTitle={"All Registered Students"}
              />
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default function AdminDashBoard() {
  return <DashboardContent />;
}
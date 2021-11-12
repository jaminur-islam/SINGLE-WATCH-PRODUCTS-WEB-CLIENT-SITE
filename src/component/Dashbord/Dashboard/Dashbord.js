import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { padding } from '@mui/system';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Pay from '../UserDashBoard/Pay/Pay';
import Myorders from '../UserDashBoard/Myorders/Myorders';
import MyReview from '../UserDashBoard/MyReview/MyReview';


const drawerWidth = 200;

function Dashbord(props) {

  let { path, url } = useRouteMatch();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='py-5' style={{backgroundColor: '#001a1a'}}>
      <Link className='text-decoration-none fs-6 ms-2' to='/home'><i className="fas fa-angle-double-left"></i> Back to Home </Link>
       <hr className='text-white' />

       <Link 
        to={`${url}`}
        className='fs-6 text-warning  text-decoration-none d-flex align-items-center ms-3'
        > 
       <i className="fas  fa-shopping-cart fs-3 me-3 text-success "></i>
       My Orders
        </Link>

       <Link 
       to={`${url}/pay`}
        className='fs-6 text-decoration-none my-3 text-warning d-flex align-items-center ms-3'
        > 
       <i className="fas fa-comment-dollar  fs-3 me-3 text-danger"></i>
       Pay
        </Link>

       <Link 
        to={`${url}/myreview`}
        className='fs-6 text-warning text-decoration-none d-flex align-items-center ms-3'
        > 
       <i className="fas fa-star-half-alt fs-3 me-3 text-info"></i>
       Give review 
        </Link>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: ' #003333',
          color:'#e6ffcc'
          
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dash Board 
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        <Switch>

        <Route exact path={`${path}`}>
                 <Myorders></Myorders>
           </Route>

           <Route path={`${path}/pay`}>
                 <Pay></Pay>
           </Route>
           
           <Route path={`${path}/myreview`}>
             <MyReview></MyReview>
           </Route>

        </Switch>
        
        
      </Box>
    </Box>
  );
}

Dashbord.propTypes = {
  window: PropTypes.func,
};

export default Dashbord;





              {/* 
                 <li className="mt-2">
                   <Link to="/add"> Manage All Orders </Link>
                 </li>
                 <li className="mt-2">
                   <Link to="/manage"> Add A Product </Link>
                 </li>
                 <li className="mt-2">
                   <Link to="/manage"> Make Admin </Link>
                 </li>
                 <li className="mt-2">
                   <Link to="/manage"> Manage Products </Link>
                 </li> */
                 
                 
                    {/*  <li className="mt-2">
                <Link to="/manage"> Pay </Link>
              </li>

              <li className="mt-2">
                <Link to="/add"> My Orders </Link>
              </li>

              <li className="mt-2">
                <Link to="/manage"> Review </Link>
              </li> */}}
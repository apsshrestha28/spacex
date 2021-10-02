import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { FaRocket } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  nav_company: { 
    border: 0,
    color: '#ffffff',
    "&:hover": {
      color: '#000000'
    },
    fontSize: 40,
    marginRight:20,
    padding: '0 10px',
    textDecoration:'none'
  },

  nav_rockets: {
    color:'#ffffff',
    "&:hover": {
      color: '#000000'
    },
    fontSize: 20,
    textDecoration: 'none',
   
  },

  nav_icon: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
    height:48,
    width:50
  }
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <FaRocket className = {classes.nav_icon}/>
        <NavLink to="/" className={classes.nav_company}>SPACEX</NavLink>
        <NavLink to="/rocket" className={classes.nav_rockets}>ROCKETS</NavLink>
      </Toolbar>  
    </AppBar>
  );
};

export default Navbar;
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import GitHubIcon from "@material-ui/icons/GitHub";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),}
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  iconSize: {
    fontSize: 35,
  },
  linkSize: {
    fontSize: 25,
  },
  title: {
    flexGrow: 1
  }
}));

const Naavbar = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  }

  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit">
            <GitHubIcon className={classes.iconSize} />
          </IconButton>
          <Typography variant="h4" color="inherit" className={classes.title}>
            Github Finder
          </Typography>
          <div>
            {isMobile ? (
              <>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={() => handleMenuClick("/")}>Home</MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/about")}>
                    About
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div className={classes.root}>
                <Button variant="contained" onClick={() => handleButtonClick('/')}>Home</Button>
                <Button variant="contained" onClick={() => handleButtonClick('/about')}>About</Button>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
  );
};

export default withRouter(Naavbar);

import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  searchButton: {
    backgroundColor: "#333333",
    color: '#fff',
    '&:hover': {
      backgroundColor:"#333333",
      opacity: "0.75"
  }
  }, 
}));

const SingleUser = ({ user: { login, avatar_url, html_url } }) => {
  const classes = useStyles();

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`}>
            <Button size="small" variant="outlined" className={classes.searchButton}> 
              More
            </Button>       
        </Link>
        
      </div>
    </div>
  );
};

export default SingleUser;

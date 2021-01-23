import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useState } from "react";
import AlertContext from "./alert/alertContext";
import GithubContext from "./context/githubContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  searchButton: {
    backgroundColor: "#333333",
    '&:hover': {
      backgroundColor:"#333333",
      opacity: "0.8"
  }
  },
  buttonPadding: {
    padding: "10px"
  }
}));

const SearchBar = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const classes = useStyles();

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter your search need", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className={classes.root}>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users.."
          value={text}
          onChange={onChange}
        />
        <Button variant="contained" fullWidth="true" color="primary" value="Search" className={classes.searchButton} onClick={onSubmit}>
          Search
        </Button>
        <div className={classes.buttonPadding}></div>
      {githubContext.users.length > 0 && (
        <Button variant="outlined" fullWidth="true" onClick={githubContext.clearUsers}>
          Clear
        </Button>
      )}
      </form>
    </div>
  );
};

export default SearchBar;

import React, { useContext, useState } from "react";
import AlertContext from "./alert/alertContext";
import GithubContext from "./context/githubContext";

const SearchBar = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

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
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users.."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchBar;

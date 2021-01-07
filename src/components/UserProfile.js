import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GithubContext from "./context/githubContext";
import Spinner from "./Spinner";
import Repository from "./userRepository/Repository";

const UserProfile = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const {
    user,
    loading,
    getSingleUser,
    getUserRepository,
    repos
  } = githubContext;

  useEffect(() => {
    getSingleUser(match.params.login);
    getUserRepository(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    company,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hirable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <div>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      Hirable:{" "}
      {hirable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-cnter">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username: </strong> {login}
                </>
              )}
            </li>

            <li>
              {company && (
                <>
                  <strong>Company: </strong> {company}
                </>
              )}
            </li>

            <li>
              {blog && (
                <>
                  <strong>Website: </strong> {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repository repos={repos} />
    </div>
  );
};

export default UserProfile;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  Box,
  Card,
  Divider,
  Input,
  TextField,
  makeStyles,
  IconButton,
  Typography,
  Row,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Button from "./Button";
import { fetchUsers } from "../redux/fetchUsers";
import { fetchRepo } from "../redux/fetchRepo";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: ({}) => ({
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: 0.5,
  }),
}));

const Search = ({}) => {
  const filteredUsers = useSelector((state) => state.usersReducer.users);
  const filteredRepos = useSelector((state) => state.usersReducer.repos);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  async function mapRepos(user) {
    const REPOS_URL = `https://api.github.com/users/${user}/repos`;

    const ReposResponse = await axios(REPOS_URL);
    const repos = await ReposResponse.data;
    console.log(repos);
    if (repos) {
      dispatch(fetchRepo(repos));
    }
  }
  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const fetchdata = async (user) => {
    const USERS_URL = `https://api.github.com/search/users?q=${user}+in:user`;
    const response = await axios(USERS_URL);
    const data = await response.data;
    const users = data.items;
    const usersLength = Object.entries(users).length;
    const filteredUsers =
      usersLength > 5
        ? Object.entries(users)
            .slice(0, 5)
            .map((entry) => entry[1])
        : users;

    dispatch(fetchUsers(filteredUsers));
  };

  const onSearchHandler = () => fetchdata(user);

  return (
    <Card className={clsx(classes.root)}>
      <Box p={2} display="flex" alignItems="center">
        <SearchIcon />
        <TextField
          variant="standard"
          placeholder="Wyszukaj"
          margin="normal"
          onChange={handleChange}
        />
      </Box>
      <Divider />
      <Divider />
      <Button onSearchHandler={onSearchHandler}>Search</Button>
      <Typography m={3}>Showing user for {user}</Typography>
      <Divider></Divider>
      {filteredUsers && (
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {filteredUsers.map((user) => (
            <Box key={user.id}>
              <TreeItem
                nodeId={user.id}
                label={user.login}
                onClick={() => mapRepos(user.login)}
              >
                {user.login &&
                  filteredRepos.map((repo) => (
                    <Card keys={repo.id}>
                      <Typography>{repo.name}</Typography>
                      <Typography>{repo.description}</Typography>
                    </Card>
                  ))}

                <Divider></Divider>
              </TreeItem>
              <Divider></Divider>
            </Box>
          ))}
        </TreeView>
      )}
    </Card>
  );
};

export default Search;

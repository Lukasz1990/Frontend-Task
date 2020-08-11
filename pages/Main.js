import styled from "styled-components";
import React from "react";
import Search from "../components/Search";
import {
  Box,
  Card,
  Chip,
  Button,
  Divider,
  Input,
  TextField,
  makeStyles,
  IconButton,
  Typography,
  Container,
} from "@material-ui/core";

const S = {
  Main: styled.div`
    display: flex;
    width: 600px;
    padding: 40px;
    margin: 0 auto;
  `,
};

const Main = ({}) => {
  return (
    <S.Main>
      <Box>
        <Typography>React Interview Task</Typography>
      </Box>
      <Container maxWidth="lg">
        <Box mt={3}>
          <Search
          // options={setOptions()}
          // chips={chips}
          // resetValue={resetValue}
          // handleInputChange={handleInputChange}
          // handleChipDelete={handleChipDelete}
          // handleMultiSelectChange={handleMultiSelectChange}
          // handleChipDeleteAll={handleChipDeleteAll}
          />
        </Box>
      </Container>
    </S.Main>
  );
};

export default Main;

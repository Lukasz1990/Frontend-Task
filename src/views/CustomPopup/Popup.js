import React from 'react';
import {
  Modal,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Divider,
  Button
} from '@material-ui/core';
import styled from 'styled-components'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%'
  },
  container: {
    marginTop: theme.spacing(3),
    height: 200
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const S = {
    Input: styled.input`
    border-radius: 20px 20px 20px 20px;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    outline-style: none;
    background-color: transparent;
    color: rgba(58, 67, 68, 0.6);
    padding-left: 30px;
    height:40px;
    margin-left:10px;
    `,
 
}

const Popup = ({open,cancel,addCellHandler,onChangeHandler,className,...rest}) => {
  const classes = useStyles();

  return (
    <Modal  open={open}>
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >   
        <CardHeader>New cell</CardHeader>
        <Divider />
        <CardContent>
          <Typography variant="body1">
          <S.Input type="text" name="text"  placeholder='add'  onChange={onChangeHandler} />
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
        <Button color="primary"  onClick={addCellHandler}>Add cell</Button>
          <Button color="success"  onClick={cancel}>Cancel</Button>
        </CardActions>
        </Card> 
     </Modal>
  );
}

Popup.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

export default Popup;
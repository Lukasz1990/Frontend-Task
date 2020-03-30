import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Cell from './Cell'
import Popup from './Popup'
import { useSelector,useDispatch } from 'react-redux'
import { removeData } from '../../reducers/actions/removeData'
import { addData } from '../../reducers/actions/addData'
import { makeStyles } from '@material-ui/styles';
import Page from 'src/components/Page';
import {
  Container,
  Divider,
  Typography,
  Grid,
  colors,
  Button
} from '@material-ui/core';


const S = {

    Button: styled.button`
      background-color: rgba(251, 253, 254, 1);
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-color: rgba(204, 204, 204, 1);
      box-shadow: none;
      border-radius: 40px;
      font-size: 14px;
      color: rgba(57, 67, 68, 0.8);
      width: 100px;  
      height: 40px;
      font-weight: bold;
      font-style: normal;
      margin-top:10px;
      cursor:pointer;
      margin:5px;
      &:hover {
        box-shadow: 0px 2px 4px rgba(57, 67, 68, 0.349019607843137);
        background-color:#ddd;
        color:#fff;
      }
    `,
    IconContainer: styled.span`
    display: flex;
    margin-right:10px;
    ${({ extended }) => extended && css`
    margin-right:-60px;
    
  `}
    ${({ add }) => add && css`
    margin-left:-60px;
    margin-top:30px;
  `}
  `,
    RemmoveIcon: styled.img`
    margin-right: 10px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  `,
    AddIcon: styled.img`
    margin-right: 10px;
    width: 54px;
    height: 54px;
    cursor: pointer;
  `,
   People: styled.div`
   width:200px;
   background:#8f76f5;
   height:50px;
   padding:20px;
   display:flex;
   border-radius:6px;
   font-size:20px;
   font-weight:600;
   justify-content:center;
   align-items:center;
   color:#FFF;
   margin-left:-140px;
   margin-bottom:20px;
   `,
}
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300],
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}));


const CustomPopup = ({}) => {
  


  const data = useSelector(state=>state.popupData.PopupData)
  console.log(data)
  const dispatch = useDispatch()

  const [value, setValue] = useState('');
  const [open, toggleModal] = useState(false)

  const onChangeHandler = (e) => {
    setValue(e.target.value)
  }

  const addCellHandler = () => {
    if (value !== '') {
      dispatch(addData(
        {
          value,
          'id':Math.random()
        }
      ))
      toggleModal(false)        
    }
  }
  

  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="customPopup"
    >
      <Container maxWidth="md">
       <S.People  className={classes.people}>People</S.People>
        <Popup  open={open} cancel={() => toggleModal(false)} onChangeHandler={onChangeHandler} addCellHandler={addCellHandler}/>
        {data.map(({ id, value })=> (
          <Cell key={id} extended={value==='Ethncity'} >{value} 
            <S.IconContainer extended={value==='Ethncity'}>
              <S.RemmoveIcon  src="./../../static/images/minus.png"  onClick={() => dispatch(removeData(id))}/>
            </S.IconContainer>
          </Cell>
        ))}
            <S.IconContainer add>
              <S.AddIcon  src="./../static/images/more.png"  onClick={() => toggleModal(true)}/>
            </S.IconContainer>

     </Container>
     </Page>
    )

}

export default CustomPopup
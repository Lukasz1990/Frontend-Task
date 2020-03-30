import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { removeDataSubCell } from '../../reducers/actions/removeDataSubCell'
import { addDataSubCell } from '../../reducers/actions/addDataSubCell'
import Popup from './Popup'

const S = {

    Cell: styled.div`
    display:flex;
    justify-content:space-between;
    font-size:20px;
    font-weight:700;
    color:#4d6285;
    border:1px solid #eee;
    padding:10px;
    padding-left:30px;
    margin-left:10px;
    border-radius:6px;
    position:relative;
    width:400px;
    margin:15px;
    ${({ smaller }) => smaller && css`
    border:1px solid #eee;
    width:300px;
    font-size:14px;
    margin-left:60px;
    &:before {
      content:'';
      position: absolute;

    ,
  `}
    ${({ extended }) => extended && css`
    border:1px solid #eee;
    width:300px;
    font-size:14px;
    &:before {
      content:'';
      position: absolute;

    ,
  `}
    &:before {
      content:'';
      position: absolute;
      width:8px;
      height:100%;
      background:#8f76f5;
      border-top-left-radius:6px;
      border-bottom-left-radius:6px;
      left:0;
      margin-top:-10px;
    }
    `,
      
      CellExtended:styled.div`
      ${({ extended }) => extended && css`
      border:1px solid #eee;
      width:400px;
      height:auto;
      border-radius:6px;
      margin-left:15px;
      position:relative;
      padding:10px;
    
    &:before {
      content:'';
      position: absolute;
      width:8px;
      height:100%;
      background:#8f76f5;
      border-top-left-radius:6px;
      border-bottom-left-radius:6px;
      left:0;
      margin-top:-10px;

    ,
      
    `}
      `,
      IconContainer: styled.span`
      display: flex;
      margin-right:10px;
      ${({ extended }) => extended && css`
      margin-right:-60px;
      
      `}
      ${({ smaller }) => smaller && css`
      margin-right:-5px;
      
      `}
      ${({ add }) => add && css`
      margin-left:30px;
      
      `}
      `,
      RemmoveIcon: styled.img`
      width: 24px;
      height: 24px;
      cursor: pointer;
      `,
      AddIcon: styled.img`
      margin-right: 10px;
      width: 34px;
      height: 34px;
      cursor: pointer;
    `,
}

const Cell = ({ children,extended,smaller }) => {

  const extendedCells = useSelector(state=>state.popupData.extendedCells)
  const dispatch = useDispatch()
  
  const [value, setValue] = useState('');
  const [open, toggleModal] = useState(false)

  const onChangeHandler = (e) => {
    setValue(e.target.value)
  }

  const addCellHandler = () => {
    if (value !== '') {
      dispatch(addDataSubCell(
        {
          value,
          'id':Math.random()
        }
      ))
      toggleModal(false)        
    }
  }
  
    
    return (
    <S.CellExtended extended={extended}>
              <Popup  open={open} cancel={() => toggleModal(false)} onChangeHandler={onChangeHandler} addCellHandler={addCellHandler}/>
      <S.Cell extended={extended}>
        {children}
      </S.Cell>
      {extended &&  extendedCells.map(({ id, value })=>(
                <>
                <S.Cell key={id} smaller>{value}
                  <S.IconContainer smaller>
                    <S.RemmoveIcon  src="../static/images/minus.png"  onClick={() => dispatch(removeDataSubCell(id))}/>
                  </S.IconContainer>
                </S.Cell>
                  </>
           ))}
      {extended && 
                <S.IconContainer add>
                      <S.AddIcon  src="../static/images/more.png"  onClick={() => toggleModal(true)}/>
                  </S.IconContainer>}
    </S.CellExtended>
    )
  }

export default Cell
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Cell from '../components/Cell'
import Wrapper from '../components/Wrapper'
import Popup from '../components/Popup'
import { useSelector,useDispatch } from 'react-redux'
import { removeData } from '../redux/removeData'
import { addData } from '../redux/addData'

const S = {

    Button: styled.button`s
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
   margin-left:-100px;
   margin-bottom:20px;
   `
}

const MainContent = ({}) => {

  const data = useSelector(state=>state.dataReducer.data)
  const dispatch = useDispatch()

  const [value, setValue] = useState('');
  const [isOpen, toggleModal] = useState(false)

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
  

    return (
     <Wrapper>
       <S.People>People</S.People>
        <Popup  isOpen={isOpen} cancel={() => toggleModal(false)} onChangeHandler={onChangeHandler} addCellHandler={addCellHandler}/>
        {data.map(({ id, value })=> (
          <Cell key={id} extended={value==='Ethncity'} >{value} 
            <S.IconContainer extended={value==='Ethncity'}>
              <S.RemmoveIcon  src="../static/images/minus.png"  onClick={() => dispatch(removeData(id))}/>
            </S.IconContainer>
          </Cell>
        ))}
            <S.IconContainer add>
              <S.AddIcon  src="../static/images/more.png"  onClick={() => toggleModal(true)}/>
            </S.IconContainer>
     </Wrapper>
    )

}

export default MainContent
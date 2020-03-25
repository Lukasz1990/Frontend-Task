import React from 'react';
import { Button, Modal as ModalStrap, ModalHeader, ModalBody, ModalFooter,Input } from 'reactstrap';
import styled from 'styled-components'

const S = {
    Input: styled(Input)`
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

const Popup = ({isOpen,cancel,addCellHandler,onChangeHandler}) => {

  return (
    <ModalStrap isOpen={isOpen}>     
        <ModalHeader>New cell</ModalHeader>
        <ModalBody>
          <S.Input type="text" name="text"  placeholder='add'  onChange={onChangeHandler} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary"  onClick={addCellHandler}>Add cell</Button>
          <Button color="danger" onClick={cancel}>Cancel</Button>
        </ModalFooter>
     </ModalStrap>
  );
}

export default Popup;
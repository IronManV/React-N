import React, { FC, useState } from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { IState } from '../reducers';
import { ITodoListReducer } from '../reducers/todoListReducer';

import { ISingleElementList } from '../entities/todoSingleEL';

const Wrapper = styled.View`
    margin: 80px 20px 0px 20px;
    height: 100%;
`;

const SingleList = styled.View`
    margin: 5px 0px 0px 0px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0px 2px 2px 5px
    background-color: #e6e6e6;
`;
const BottomBtn = styled.View`
    width: 100%;
    position: absolute;
    bottom: 175px;
`;

const TodoList: FC<{ switchView(formView: boolean) }> = props => {
    const todoListState = useSelector<IState, ITodoListReducer>(state => state.todoList);
    const goToForm = () => {
        props.switchView(true);
    }

    return (
        <Wrapper>
            {todoListState.todoList.map((elem: ISingleElementList, index: number) =>
                <SingleList key={index}>
                    <Text>{elem.name}</Text>
                    <Text>{elem.description}</Text>
                </SingleList>
            )}
            <BottomBtn>
                <Button title="Add new" onPress={goToForm} color="#4a4a4a" />
            </BottomBtn>
        </Wrapper>
    )
};

export default TodoList;
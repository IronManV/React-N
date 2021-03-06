import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { TextInput, Button, View } from 'react-native';

import { useDispatch } from 'react-redux';

import { setNewElemTodoList } from '../actions/todoListActions';
import { ISingleElementList } from '../entities/todoSingleEl';

const Wrapper = styled.View`
    margin: 80px 20px 0px 20px;
`;

const CustomTextInput = styled.TextInput`
    border: 1px solid;
    padding: 10px;
    color: black;
    width: 100%;
    margin: 5px 0px 0px 0px;
`;


type SetNewElemTodoList = ReturnType<typeof setNewElemTodoList>;


const Form: FC<{ switchView(formView: boolean) }> = props => {
    const dispatch = useDispatch();
    const [nameInput, setNameInput] = useState<string>('');
    const [descInput, setDescInput] = useState<string>('');

    const nameValueChange = (txt) => {
        setNameInput(txt.nativeEvent.text);
    }

    const descriptionValueChange = (txt) => {
        setDescInput(txt.nativeEvent.text);
    }

    const saveDate = () => {
        dispatch<SetNewElemTodoList>(setNewElemTodoList({
            name: nameInput,
            description: descInput
        } as ISingleElementList
        ));
        props.switchView(false);
    }

    return (
        <Wrapper>
            <CustomTextInput value={nameInput} onChange={nameValueChange} placeholder="Name" />
            <CustomTextInput value={descInput} onChange={descriptionValueChange} placeholder="Description" />
            <View style={{ margin: 5 }}>
                <Button title="Save" onPress={saveDate} color="#4a4a4a" />
            </View>

        </Wrapper>
    )
};

export default Form;
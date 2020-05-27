import React, { FC, useState } from 'react';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

import Form from '../../components/Form';
import TodoList from '../../components/TodoList'

const TodoListScreen: FC = () => {
    const [formView, setFormView] = useState<boolean>(false);

    return (
        <View>
            {formView ? (
                <Form switchView={setFormView} />
            ) : (
                    <TodoList switchView={setFormView} />
                )}
        </View>
    );
}
export default TodoListScreen;

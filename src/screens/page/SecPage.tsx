import React, { FC } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import styled from 'styled-components/native';

const CustomImageHead = styled.Image`
    height: 200px;
    width: 100%;
`;
const RightSidePhoto = styled.Image`
    height: 200px;
    width: 50%;

`;
const WrappedText = styled.Text`
    width: 50%;
    text-align: justify;
    padding-right: 10px;
`;
const LeftSideImg = styled.Image`
`;

const Home: FC = () => {
    return (
        <ScrollView>
            <CustomImageHead
                source={require('../../assets/iron3.jpg')}
            />
            <View style={{ margin: 10 }}>
                <RightSidePhoto style={{ position: 'absolute', right: 0 }} source={require('../../assets/iron2.jpg')} />
                <WrappedText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                </WrappedText>
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10
            }}>
                <Image style={{
                    width: 300,
                    height: 200,
                }} source={require('../../assets/iron1.jpg')} />
                <Text style={{ textAlign: 'justify' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                </Text>
            </View>
            <View style={{ margin: 10 }}>
                <Image style={{ width: '50%', height: 200 }} source={require('../../assets/iron4.jpg')} />
                <Text style={{
                    width: '50%',
                    position: 'absolute',
                    right: 0,
                    textAlign: 'right',
                    padding: 5,
                    textAlign: 'justify',
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </Text>
            </View>
        </ScrollView>
    );
}
export default Home;
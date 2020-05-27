import React, { FC } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';
import * as Layout from '../../constans/Layout';

const WelcomeText = styled.Text`
    margin: 120px 20px;
    font-size: 16px;
    color: ${Colors.red};
`;
const EloText = styled.Text`
    margin: 120px;
    font-size: 32px;
    color: ${Colors.black};
`;

const UserDescription = styled.Text`
    margin: 0px 20px;
    font-size: 17px;
    fontWeight: bold;
    text-align: justify;
`;

const ProfileText = styled.Text`
    margin: 10px 25px;
    text-align: justify;
`;
const ProfileImage = styled.Image`
    width: 75px;
    height: 120px;
    margin: 30px;
    border-radius: 50px;
`;

interface IWelcomeProps {
    myProps: string;
}

const Welcome: FC<IWelcomeProps> = props => {
    return (


        <ScrollView>
            <ProfileImage
                source={require('../../assets/ironmanhead.png')}
            />
            <UserDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </UserDescription>


            <ProfileText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ProfileText>


        </ScrollView>

    );
};

export default Welcome;
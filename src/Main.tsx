import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabs from './tools/BottomNavigation';

const Main: FC = () => {
    return (
        <NavigationContainer>
            <BottomTabs></BottomTabs>
        </NavigationContainer>
    );
}

export default Main;
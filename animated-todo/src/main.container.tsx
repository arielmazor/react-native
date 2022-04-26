import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import SafeArea from './utils/safeArea'

type IProps = {
  children: React.ReactNode
}

const AppContainer: React.FC<IProps> = ({ children }) => {
  return (
    <NavigationContainer>
      <SafeArea>
        {children}
      </SafeArea>
    </NavigationContainer>
  )
}

export default AppContainer;

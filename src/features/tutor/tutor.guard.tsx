import * as React from 'react';
import { Text, View } from 'react-native';

type IProps = {
  children: React.ReactNode
}

const SafeArea: React.FC<IProps> = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  debugger
  return (
    <View>
      {isLoading ? <Text>Loading....</Text> : { children }}
    </View>
  )
}

export default SafeArea;
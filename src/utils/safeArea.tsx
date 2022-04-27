import * as React from 'react';
import { Platform, StatusBar, SafeAreaView } from "react-native";

type IProps = {
  children: React.ReactNode
}

const SafeArea: React.FC<IProps> = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
      {children}
    </SafeAreaView>
  )
}

export default SafeArea;
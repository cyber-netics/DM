import React from "react";
import { SafeAreaView, View } from "react-native";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header title={"Download Master"} />
      <SafeAreaView>
        <View>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default Layout;

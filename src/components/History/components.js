import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

import IconMci from "react-native-vector-icons/MaterialCommunityIcons";
import AntdProgress from "@ant-design/react-native/lib/progress";

const dimentions = Dimensions.get("window");

export const Icon = ({ name, color, style }) => {
  let iconStyle = style ? { ...style } : {};
  return (
    <IconMci
      style={({ paddingLeft: 5 }, iconStyle)}
      name={name}
      size={22}
      color={color || "red"}
    />
  );
};

export const Show = ({ label, icon }) => (
  <View style={styles.flexRow}>
    <Text style={styles.label}>{label}</Text>
    {icon}
  </View>
);

export const Title = (props) => {
  const longText = (str) => {
    if (!str) return "..........";
    const { width } = dimentions;
    const max = Math.round((width * 0.53) / 10);
    if (str.length < max) return str;
    return str.slice(0, max) + "...";
  };

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{longText(props.title)}</Text>
    </View>
  );
};

export const ContentInfo = (props) => {
  const capFirstChar = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <View style={styles.contentInfo}>
      <Show label={"Source"} icon={<Icon name={"youtube"} />} />
      <Show
        label={capFirstChar(props.content.format)}
        icon={<Icon name={"video"} color="#EE693F" />}
      />
      <Show
        label={`HQ`}
        icon={<Icon name={"quality-high"} color="#EE693F" />}
      />
    </View>
  );
};

export const Progress = ({ progress }) => {
  if (!progress) return <></>;

  return (
    <View style={{ paddingTop: 10 }}>
      <AntdProgress percent={progress} barStyle={styles.progress} />
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
  },
  contentInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  titleContainer: {
    flexWrap: "wrap",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    fontFamily: "sans-serif-bold",
    color: "#000",
    paddingTop: 2,
  },
  title: {
    fontSize: 14,
    // fontFamily: "sans-serif-bold",
    color: "#000",
  },
  progress: {
    borderColor: "#ee693fd6",
  },
});

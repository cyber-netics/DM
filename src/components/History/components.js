import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

const dimentions = Dimensions.get("window");

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

export const ContentInfo = (props) => (
  <View style={styles.contentInfo}>
    <Show label={"Source"} icon={<Icon name={"youtube"} />} />
    <Show
      label={helpers.capFirstChar(props.content.format)}
      icon={<Icon name={"video"} color="#EE693F" />}
    />
    <Show label={`HQ`} icon={<Icon name={"quality-high"} color="#EE693F" />} />
  </View>
);

const styles = StyleSheet.create({
  contentInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  titleContainer: {
    flexWrap: "wrap",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    // fontFamily: "sans-serif-bold",
    color: "#000",
  },
});

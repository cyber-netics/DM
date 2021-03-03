import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Swipeable from "../Swipable";
import { Title, ContentInfo, Progress } from "./components";

const dimentions = Dimensions.get("window");

const Content = ({ lastElem, handleRemove, content }) => {
  return (
    <Swipeable
      divider={lastElem}
      container={styles.containerStyle}
      handleRemove={handleRemove}
      contentId={content.contentId}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: content.thumbnail }} style={styles.image} />
      </View>

      <View style={styles.infoContainer}>
        <Title title={content.title} />
        <ContentInfo content={content} />
        <Progress progress={content.progress} />
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingBottom: 11,
    paddingTop: 11,
  },

  imageContainer: {
    borderColor: "#c7c7c757",
    borderWidth: 1,
    borderRadius: 3,
    padding: 2,
  },

  infoContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
  },
  image: {
    borderRadius: 2,
    width: Math.round(dimentions.width * 0.42),
    height: Math.round(dimentions.width * 0.25),
    resizeMode: "cover",
  },
});

export default Content;

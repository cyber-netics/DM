import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Content from "./Content";

const History = ({ historyList, handleRemove }) => {
  const historyArr = Object.keys(historyList);
  const lastElem = Number(historyArr[historyArr.length - 1]);

  return (
    <View style={styles.container}>
      <FlatList
        data={historyArr}
        keyExtractor={(item) => item}
        renderItem={(content) => (
          <Content
            // if content is last element
            lastElem={content.index === lastElem}
            content={historyList[content.item]}
            handleRemove={handleRemove}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { },
});

export default History;

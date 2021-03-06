import React, { useState } from "react";

import { StyleSheet, View } from "react-native";
import Layout from "./components/Layout";
import InputForm from "./components/InputForm";
import History from "./components/History";
import downloader from "./downloader";

const App = () => {
  const [inputUrl, setInputUrl] = useState();
  const [historyList, setHistoryList] = useState([
    {
      contentId: "asdf",
      thumbnail: "https://www.uu.se/digitalAssets/805/c_805646-l_1-k_image.jpg",
      title: "This is the video title. Long text is break the Title",
      format: "mp4",
      progress: 50,
    },
    {
      contentId: "test2",
      thumbnail: "https://www.uu.se/digitalAssets/805/c_805646-l_1-k_image.jpg",
      format: "mp4",
      progress: 70,
    },
  ]);

  const handleDownload = async () => {
    downloader();
  };

  const removeHistoryItem = () => {};

  return (
    <Layout>
      <View style={styles.container}>
        <InputForm
          handleInput={(val) => setInputUrl(val)}
          handleSubmit={handleDownload}
          value={inputUrl}
        />
        <View style={styles.historyContainer}>
          <History historyList={historyList} handleRemove={removeHistoryItem} />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
  },
  historyContainer: {
    paddingTop: 50,
  },
});

export default App;

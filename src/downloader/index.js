import ytdl from "react-native-ytdl";

// Expo libraries works with bear create react app
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";

const youtubeURL = "https://www.youtube.com/watch?v=hS5CfP8n_js";
const imageUrl =
  "https://fyf.tac-cdn.net/images/products/large/F-898.jpg?auto=webp&quality=80&width=650";

const getDownloadLink = async () => {
  const urls = await ytdl(youtubeURL, { quality: "highestvideo" });
  return urls[0].url;
};

const createDownloadable = async (url, path, callback) => {
  return await FileSystem.createDownloadResumable(url, path, {}, callback);
};

const createPath = (name) => {
  return `${FileSystem.cacheDirectory}${name}.mp4`;
};

const getPermission = async () => {
  return await Permissions.askAsync(Permissions.MEDIA_LIBRARY_WRITE_ONLY);
};

const downloadAsync = async (callback) => {
  await getPermission();

  const url = await getDownloadLink();
  const path = createPath();

  const dwl = await createDownloadable(url, path, callback);

  const file = await dwl.downloadAsync();

  await MediaLibrary.saveToLibraryAsync(file.uri);
};

export default downloadAsync;

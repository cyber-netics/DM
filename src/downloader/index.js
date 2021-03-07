import ytdl from "react-native-ytdl";

// Expo libraries works with bear create react app
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";

const youtubeURL = "http://www.youtube.com/watch?v=04GiqLjRO3A";
const imageUrl =
  "https://fyf.tac-cdn.net/images/products/large/F-898.jpg?auto=webp&quality=80&width=650";

const createDownloadable = (url, path, callback) => {
  return await FileSystem.createDownloadResumable(
    url, path, {}, callback
  );
}

const getDownloadLink = async () => {
  const urls = await ytdl(youtubeURL, { quality: "highestvideo" });
  return urls[0].url;
}

const createPath = (name) => {
  return `${FileSystem.cacheDirectory}${name}`;

}

const getPermission = async () => {
  return await Permissions.askAsync(Permissions.MEDIA_LIBRARY_WRITE_ONLY);
}

const downloadAsync = async (callback) => {
  await getPermission();

  const url = await getDownloadLink();
  const path = createPath();

  const dwl = await createDownloadable(url, path, callback);
  
  const file = await dwl.downloadAsync();

  await MediaLibrary.saveToLibraryAsync(file.uri);
};

export default downloadAsync;

import ytdl from "react-native-ytdl";
import RNFS from "react-native-fs";
import CameraRoll from "@react-native-community/cameraroll";

const youtubeURL = "http://www.youtube.com/watch?v=04GiqLjRO3A";
const imageUrl =
  "https://fyf.tac-cdn.net/images/products/large/F-898.jpg?auto=webp&quality=80&width=650";

const test = async () => {
  const urls = await ytdl(youtubeURL, { quality: "highestaudio" });

  RNFS.downloadFile({
    fromUrl: imageUrl,
    toFile: `${RNFS.DocumentDirectoryPath}/react-native.mp4`,
  }).promise.then((r) => {
    console.log("result", r);
    CameraRoll.save(`${RNFS.DocumentDirectoryPath}/react-native.mp4`, "video")
      .then((videoUri) => {
        console.log("videoUri", videoUri);
      })
      .catch((e) => console.log(e));
  });
};

export default test;

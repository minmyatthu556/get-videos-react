import axios from "axios";

const KEY = "AIzaSyCdu2rN8Tu1RWw1d9NWkCiMOgenRx6jUZk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});

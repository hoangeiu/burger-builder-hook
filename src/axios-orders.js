import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-9caa1.firebaseio.com/",
});

export default instance;

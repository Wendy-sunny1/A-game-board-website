import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b96e8243aa704cc08fd0d71b670ce782",
  },
});

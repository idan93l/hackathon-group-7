import axios from "axios";

let myUrl = "http://localhost:5000/api/songs"; //development

if (process.env.NODE_ENV === "production") {
  myUrl = "api/songs";
}
export default axios.create({
  baseURL: myUrl,
});

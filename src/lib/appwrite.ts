import { Client } from "appwrite";
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64c20c73d3d69b74c53a");
export default client;

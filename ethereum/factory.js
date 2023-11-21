import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const dotenv = require("dotenv");

dotenv.config({ path: "../config.env" });

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	process.env.ADDRESS
);

export default instance;
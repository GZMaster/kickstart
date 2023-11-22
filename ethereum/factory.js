import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0xB7D64246B1449687667e21eAAf5bBCf9e716Fd27"
);

export default instance;

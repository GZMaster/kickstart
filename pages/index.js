import React, { Component } from "react";
import factory from "../ethereum/factory";

class CampaignIndex extends Compponent {
	async componentDidMount() {
		const campaign = await factory.methods.getDeployedCampaigns().call();

		console.log(campaign);
	}

	render() {
		return <div>campaigns index!</div>;
	}
}

export default CampaignIndex;

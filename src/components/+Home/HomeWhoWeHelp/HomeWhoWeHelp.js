import React, { Component } from "react";
import { connect } from "react-redux";
import { updateOrganizations } from "../../../redux/organizations/organizations.actions";
import { Translation } from "react-i18next";
import i18n from "../../../i18n";
import { CustomTitle, Tabs } from "../../Layouts";
import Fundations from "./Fundations";
import Organizatins from "./Organizations";
import LocalCollecions from "./LocalCollections";

import {
	firestore,
	convertCollectionsSnapshotToMap
} from "../../../firebase/firebase.utils";

class HomeWhoWeHelp extends Component {
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateOrganizations } = this.props;
		const collectionRef = firestore.collection("organizations");

		collectionRef.onSnapshot(async (snapshot) => {
			// console.log(snapshot);
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateOrganizations(collectionsMap);
		});
	}

	render() {
		const foundations = this.props.organizations[0].foundations;
		const locales = this.props.organizations[0].locales;
		const ngo = this.props.organizations[0].goverments;
		return (
			<Translation i18n={i18n}>
				{(t, { i18n }) => (
					<div className='home__whoWeHelp wrapper' id='who-we-help'>
						<CustomTitle>{t("home.whoWeHelp.mainTitle")}</CustomTitle>
						<div className='home__helping'>
							<Tabs>
								<div label={t("home.whoWeHelp.labelOne")}>
									<Fundations foundations={foundations} />
								</div>
								<div label={t("home.whoWeHelp.labelTwo")}>
									<Organizatins ngo={ngo} />
								</div>
								<div label={t("home.whoWeHelp.labelThree")}>
									<LocalCollecions locales={locales} />
								</div>
							</Tabs>
						</div>
					</div>
				)}
			</Translation>
		);
	}
}

const mapState = (state) => ({
	organizations: state.organizations.organizations
});
const mapDispatch = (dispatch) => ({
	updateOrganizations: (org) => dispatch(updateOrganizations(org))
});

export default connect(
	mapState,
	mapDispatch
)(HomeWhoWeHelp);

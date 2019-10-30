import OrganizationTypes from "./organizations.types";

export const updateOrganizations = (payload) => ({
	type: OrganizationTypes.UPDATE_ORGANIZATIONS,
	payload
});

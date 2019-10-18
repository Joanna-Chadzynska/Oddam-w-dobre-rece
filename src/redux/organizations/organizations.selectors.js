import { createSelector } from "reselect";

export const selectOrg = (state) => state.organizations;
console.log();
export const selectOrganizations = createSelector(
	[selectOrg],
	(organizations) => organizations.organizations
);

export const selectOrganizationsForPreview = createSelector(
	[selectOrganizations],
	(organizations) => Object.keys(organizations).map((key) => organizations[key])
);

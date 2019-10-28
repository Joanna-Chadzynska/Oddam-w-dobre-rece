import ORG_DATA from './organizations.data';

const initState = {
  organizations: [ORG_DATA],
};

export const organizations = (state = initState, atcion) => {
  switch (atcion.type) {
    default:
      return state;
  }
};

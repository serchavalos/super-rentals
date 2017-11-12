import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment',
];

export function rentalPropertyType([propertyType]) {
  return communityPropertyTypes.includes(propertyType) ? 'Coummnity' : 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);

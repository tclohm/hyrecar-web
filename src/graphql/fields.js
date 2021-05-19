import gql from "graphql-tag";

export const EXPLORE_CARS_FIELD = gql`
	fragment ExploreCarsFields on Car {
		id
		make
		model
		year
		vin
		condition
		ratePerDay
		maxMilesPerDay
		available
		owner {
			profile {
				firstName
				lastName
				avatar {
					image {
						location
					}
				}
			}
		}
		image {
			image {
				location
			}
		}
	}
`; 

export const PUBLIC_PROFILE = gql`
	fragment PublicField on Profile {
		id
		firstName
		lastName
		avatar {
			image {
				location
			}
		}
		rating
		state
		transactions {
			id
		}
	}
`;

export const USER_PROFILE_FIELDS = gql`
	fragment ProfileField on Profile {
		id
		firstName
		lastName
		license
		avatar {
			id
			image {
				location
				name
			}
		}
	}
`

const CARS_FIELDS = gql`
	fragment CarsFields on Cars {
		id
		make
		model
		year
		vin
		condition
		ratePerDay
		image {
			image {
				location
				name
			}
		}
	}
`

const PROFILE_IMAGE = gql`
	fragment ProfileImageFields on ProfileImage {
		id
		image {
			id
			name
			mimetype
			encoding
			location
		}
	}
`

const PROFILE_FIELDS = gql`
	fragment ProfileFields on Profile {
		firstName
		lastName
		license
	}
`

export const USER_ID = gql`
	fragment UserId on User {
		id
	}
`
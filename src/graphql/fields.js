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

export const USER_PROFILE = gql`
	fragment Cars on CarOwner {
		profile {
			user {
				id
			}
		}
		cars {
			id
			make
			model
			year
			vin
			condition
			ratePerDay
			maxMilesPerDay
			available
			image {
				image {
					filename
					location
				}
			}
		}
	}
`;

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
				filename
			}
		}
	}
`

const PROFILE_IMAGE = gql`
	fragment ProfileImageFields on ProfileImage {
		image {
			filename
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
		renting
	}
`
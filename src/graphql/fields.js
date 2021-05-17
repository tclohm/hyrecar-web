import gql from "graphql-tag";

export const CARS_FIELD = gql`
	fragment CarsField on Car {
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
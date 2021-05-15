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
import gql from "graphql-tag";


export const CAR_FIELDS = gql`
	fragment CarFields on Car {
		id
		make
		model
		year
		available
		ratePerDay
		maxMilesPerDay
		image {
			image {
				name
				location
			}
		}
		owner {
			rating
		}
	}
`

export const CAR_DETAIL_FIELDS = gql`
	fragment CarFields on Car {
		id
		make
		model
		year
		available
		ratePerDay
		maxMilesPerDay
		image {
			image {
				name
				location
			}
		}
		rating {
			id
			interiors
			exteriors
			steering
			braking
			acceleration
			cleaniness
			review
			reviewer {
				firstName
				avatar {
					image {
						name
						location
					}
				}
			}
		}
		owner {
			firstName
			lastName
			rating
			avatar {
				image {
					name
					location
				}
			}
		}
	}
`
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
	fragment CarDetailFields on Car {
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
			id
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

export const PROFILE_FIELDS = gql`
	fragment ProfileFields on Profile {
		id
		firstName
		lastName
		rating
		avatar {
			image {
				name
				location
			}
		}
		cars {
			id
			make
			model
			year
			type
			owner {
				rating
			}
			image {
				image {
					name
					location
				}
			}
		}
		user {
			createdAt
		}
	}
`
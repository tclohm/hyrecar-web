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
			id
			image {
				name
				location
			}
		}
		owner {
			id
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
		airConditioning
		automaticEmergencyBrakes
		forwardCollisionWarning
		blindSpotWarning
		automaticHighBeams
		carPlay
		rearCamera
		USBCharging
		keylessEntry
		headupDisplay
		heatedSeats
		wifiHotSpot
		image {
			id
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
				id
				firstName
				avatar {
					id
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
				id
				image {
					name
					location
				}
			}
		}
	}
`

export const PROFILE_FIELDS = gql`
	fragment ProfileDetailFields on Profile {
		id
		firstName
		lastName
		rating
		avatar {
			id
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
				id
				rating
			}
			image {
				id
				image {
					name
					location
				}
			}
		}
		user {
			id
			createdAt
		}
	}
`
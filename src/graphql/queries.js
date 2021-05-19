import gql from "graphql-tag";
import { EXPLORE_CARS_FIELD, USER_ID, USER_PROFILE_FIELDS } from "./fields";

export const GET_CARS = gql`
	query carsList {
		cars {
			...ExploreCarsFields
		}
	}
	${EXPLORE_CARS_FIELD}
`;

export const GET_USER = gql`
	query yourUser {
		getUser {
			id
		}
	}
`

export const GET_CAR = gql`
	query getCar($id: ID!) {
		car(id: $id) {
			id
			make
			model
			year
			condition
			ratePerDay
			maxMilesPerDay
			available
			image {
				image {
					name
					location
				}
			}
			owner {
				profile {
					firstName
					lastName
					avatar {
						image {
							name
							location
						}
					}
				}
			}
		}
	}
`;

export const GET_USER_PROFILE = gql`
	query getProfile {
		profile {
			...ProfileField
		}
	}
	${USER_PROFILE_FIELDS}
`

export const GET_OWNED_CARS = gql`
	query Owner($id: ID!) {
		owner(id: $id) {
			id
			make
			model
			year
			vin
			condition
			image {
				image {
					location
					name
				}
			}
			ratePerDay
			maxMilesPerDay
			available
			owner {
				id
				profile {
					firstName
					lastName
				}
			}
		}
	}
`
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

export const GET_USER_PROFILE = gql`
	query getProfile {
		profile {
			...ProfileField
		}
	}
	${USER_PROFILE_FIELDS}
`
import gql from "graphql-tag";
import { CAR_FIELDS, CAR_DETAIL_FIELDS, PROFILE_FIELDS } from "./fields";


export const GET_ALL_CARS = gql`
	query carList($type: CarType) {
		cars(type: $type) {
			...CarFields
		}
	}
	${CAR_FIELDS}
`

export const GET_SINGLE_CAR = gql`
	query carDetail($id: ID!) {
		car(id: $id) {
			...CarDetailFields
		}
	}
	${CAR_DETAIL_FIELDS}
`

export const GET_PROFILE = gql`
	query profileDetail($id: ID!) {
		profile(id: $id) {
			...ProfileDetailFields
		}
	}
	${PROFILE_FIELDS}
`
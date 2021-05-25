import gql from "graphql-tag";
import { CAR_FIELDS, CAR_DETAIL_FIELDS } from "./fields";


export const GET_ALL_CARS = gql`
	query carList {
		cars {
			...CarFields
		}
	}
	${CAR_FIELDS}
`

export const GET_SINGLE_CAR = gql`
	query carDetail($id: ID!) {
		car(id: $id) {
			...CarFields
		}
	}
	${CAR_DETAIL_FIELDS}
`
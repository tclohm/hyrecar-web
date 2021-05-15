import gql from "graphql-tag";
import { CARS_FIELD } from "./fields";

export const GET_CARS = gql`
	query carsList {
		cars {
			...CarsField
		}
	}
	${CARS_FIELD}
`;
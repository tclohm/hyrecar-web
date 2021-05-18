import gql from "graphql-tag";
import { EXPLORE_CARS_FIELD } from "./fields";

export const GET_CARS = gql`
	query carsList {
		cars {
			...ExploreCarsFields
		}
	}
	${EXPLORE_CARS_FIELD}
`;
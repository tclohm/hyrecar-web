import gql from "graphql-tag";

export const ADD_PROFILE_IMAGE = gql`
	mutation ProfileImageUpload($file: Upload!) {
		uploadProfileImage(file: $file) {
			id 
			image {
				name
				mimetype
				encoding
				location
			}
		}
	}
`;

export const ADD_PROFILE = gql`
	mutation AddProfile($input: ProfileInput!) {
		addProfile(input: $input) {
			id
			firstName
			lastName
			rating
			user {
				id
			}
			avatar {
				image {
					location
					name
				}
			}
		}
	}
`

// car owner comes back
export const ADD_CAR = gql`
	mutation AddCar($input: CarInput!) {
		addCar(input: $input) {
			id
			make
			model
			year
			vin
			condition
			image
			ratePerDay
			maxMilesPerDay
			available
			owner
		}
	}
`
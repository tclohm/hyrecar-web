import gql from "graphql-tag";

export const ADD_PROFILE_IMAGE = gql`
	mutation ProfileImageUpload($file: Upload!) {
		uploadProfileImage(file: $file) {
			name
			mimetype
			encoding
			location
		}
	}
`

export const ADD_PROFILE = gql`
	mutation AddProfile($profile: ProfileInput!) {
		addProfile(profile: $profile) {
			id
		}
	}
`

export const UPDATE_PROFILE = gql`
	mutation UpdateProfile($profile: ProfileInput!) {
		updateProfile(profile: $profile) {
			id
			firstName
			lastName
			license
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

export const UPDATE_USER = gql`
	mutation UpdateUser($user: UserInput!) {
		updateUser(user: $user) {
			id
			email
			password
		}
	}
`
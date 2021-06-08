import gql from "graphql-tag";

export const ADD_PROFILE_IMAGE = gql`
	mutation ProfileImageUpload($file: Upload!) {
		uploadProfileImage(file: $file) {
			filename
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
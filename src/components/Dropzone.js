import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out'
}

const activeStyle = {
	borderColor: '#2196f3'
}

const acceptStyle = {
	borderColor: '#00e676'
}

const rejectStyle = {
	borderColor: '#ff1744'
}

const Dropzone = (props) => {
	const { profile } = props

	const placeholder = new File(['anon-0'], 'anon-0.jpg', { type: 'image/jpeg' })

	console.log(placeholder)

	const [file, setFile] = useState(placeholder)

	const reset = (event) => {
		event.preventDefault()
		setFile(placeholder);
	}

	const onDrop = useCallback(acceptedFiles => {
		console.log(acceptedFiles[0])
		setFile(acceptedFiles[0])
	}, [])

	const { 
		getRootProps, 
		getInputProps, 
		isDragActive, 
		isDragAccept, 
		isDragReject 
	} = useDropzone({ 
		onDrop,
		accept: 'image/jpeg, image/png'
	})

	const style = useMemo(() => ({
		...baseStyle,
		...(isDragActive ? activeStyle : {}),
		...(isDragAccept ? acceptStyle : {}),
		...(isDragReject ? rejectStyle : {})
	}), [isDragActive, isDragReject, isDragAccept])

	return (
		<section>
			{
				file === placeholder ?
				<img src={file.name} alt="default avatar" />
				:
				<img src={file.name} alt={file.name} />
			}
			
			<div {...getRootProps({style})}>
				<input {...getInputProps()} />
				{profile ?
					<div>Drag and drop or click to add your profile picture here</div>
					:
					<div>Drag and drop your car picture here</div>
				}
			</div>
			{profile ?
				<p>or use the <span style={{color: 'blue'}} onClick={(e) => reset(e)}>anonymous cat</span></p>
				:
				<></>
			}
		</section>
	)
}

export default Dropzone;
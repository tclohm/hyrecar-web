import React from "react";


const BottomNavForCreation = ({ info, cursor, back, next, submit }) => {
	
	return (
		<div className="absolute right-0 bottom-0 z-40 flex justify-between md:w-1/2 w-full bg-white z-50 py-4">
				<div className="absolute h-1 w-full top-0 appearance-none bg-gray-100" />
				<div className={info[cursor].progress} />
				{
					cursor === 0 ?
					<div></div>
					:
					<button className="rounded px-3 py-1 text-sm font-light ml-9"
					onClick={back}>Back</button>
				}
				{
					cursor === info.length - 1 ?
					<button className="rounded bg-gray-100 hover:bg-gray-300 px-3 py-1 text-sm font-light mr-9"
					onClick={submit}>Submit</button>
					:
					<button className="rounded bg-gray-100 hover:bg-gray-300 px-3 py-1 text-sm font-light mr-9"
					onClick={next}>Next</button>
				}
		</div>
	)
}

export default BottomNavForCreation;
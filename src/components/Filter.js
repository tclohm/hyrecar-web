import React from "react";
const unselectedTop = "hover:bg-gray-100 focus:font-medium py-3 px-4 rounded-t-xl"
const selectedTop = "hover:bg-gray-100 font-medium py-3 px-4 rounded-t-xl text-green-500"
const unselectedBottom = "hover:bg-gray-100 focus:font-medium px-4 py-3 rounded-b-xl"
const selectedBottom = "hover:bg-gray-100 font-medium px-4 py-3 rounded-b-xl text-green-500"

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="absolute left-6 top-20 z-20 flex flex-col bg-white w-52 rounded-xl shadow border">
      {
        filter === 'Popular' ?
        <>
          <a onClick={() => setFilter('Popular')}href="popular" className={selectedTop}>
          Popular
          </a>
          <a onClick={() => setFilter('New')}href="new" className={unselectedBottom}>
          New
          </a>
        </>
        :
        <>
          <a onClick={() => setFilter('Popular')}href="popular" className={unselectedTop}>
          Popular
          </a>
          <a onClick={() => setFilter('New')}href="new" className={selectedBottom}>
          New
          </a>
        </>
      }
    </div>
  )
}

export default Filter
import { make, model, carType, year, vin, ratePerDay, maxMilesPerDay } from "../validations/CarSchema"
const info = [
    { 
        id: 0, 

        className: "md:w-1/2 flex justify-center items-center md:bg-green-200 md:text-2xl", 
        progress: "absolute h-1 top-0 appearance-none bg-green-200",
        name: "make", 
        question: "What's the make of your car?", 
        schema: make 
    },
    { 
        id: 12, 
        className: "md:w-1/2 flex justify-center items-center md:bg-blue-200 md:text-2xl", 
        progress: "absolute h-1 top-0 appearance-none bg-green-200 animate-progress-1 w-1/12",
        name: "model", 
        question: "What's the model of your ", 
        schema: model 
    },
    {
        id: 24, 
        className: "md:w-1/2 flex justify-center items-center md:bg-pink-900 md:text-xl", 
        progress: "absolute h-1 top-0 appearance-none bg-green-200 animate-progress-2 w-2/12",
        name: "type", 
        question: "What type of ca", 
        schema: carType 
    },
    { 
        id: 24, 
        className: "md:w-1/2 flex justify-center items-center md:bg-yellow-200 md:text-xl", 
        progress: "absolute h-1 top-0 appearance-none bg-green-200 animate-progress-2 w-2/12",
        name: "year", 
        question: "What's the year of your ", 
        schema: year 
    },
    { 
        id: 36, 
        className: "md:w-1/2 flex justify-center items-center md:bg-purple-200 md:text-xl", 
        progress: "absolute h-1 top-0 appearance-none bg-green-200 animate-progress-3 w-3/12",
        name: "vin", 
        question: "What's vin number of your car?", 
        schema: vin 
    },
    { 
        id: 48, 
        className: "md:w-1/2 flex justify-center items-center md:bg-pink-200 md:text-xl", 
        progress: "absolute h-1 top-0 appearance-none bg-green-200 animate-progress-4 w-4/12",
        name: "ratePerDay", 
        question: "How much will you charge per day to rent your car?", 
        schema: ratePerDay 
    },
    { 
        id: 60, 
        className: "md:w-1/2 flex justify-center items-center md:bg-indigo-200 md:text-xl", 
        progress: "absolute h-1 top-0 appearance-none bg-green-200 animate-progress-4 w-5/12",
        name: "maxMilesPerDay", 
        question: "What's the maximum amount of miles that is allowed on your car per day?", 
        schema: maxMilesPerDay 
    },
    { 
        id: 72, 
        className: "md:w-1/2 flex justify-center items-center md:bg-red-200 md:text-xl", 
        progress: "absolute h-1 top-0 appearance-none bg-green-200 animate-progress-3 w-6/12",
        name: "amenities", 
        question: "What other features does your car have?", 
        schema: null
    },
    { 
        id: 84, 
        className: "md:w-1/2 flex justify-center items-center md:bg-green-200 md:text-xl md:text-2xl", 
        progress: "absolute h-1 top-0 appearance-none bg-green-200 animate-progress-4 w-11/12",
        name: "photo", 
        question: "Add a photo of your car", 
        schema: null 
    }
]

export default info
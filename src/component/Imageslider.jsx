import { useState } from "react"



function ImageSlider(){

    const[index, setIndex] = useState(0)
    const [end, setEnd] = useState("")

const images =[

    "https://www.financialexpress.com/wp-content/uploads/2025/02/diya-2025-02-28T180255.196.jpg?w=350",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ZtjM-l-N0emSha80K2wYA0MAdGZi8d7pfg&s",
   "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
   
]
//function that handle 
const handlenaxtImage=()=>{
    if (index< images.length -1){
    setIndex(index+1)
    }
    else if (index == images.length - 1){
        setEnd("Dhamaad!")
    }

    else {
        setEnd("")
    }
   
}



// the fuction that handle back image 
const handleBackImage=()=>{
    if(index >0){
    setIndex(index - 1)
    }
   
}


    return<div className="flex justify-center">
        <div className="text-center">
            <p>{end}</p>
        <div className="w-[900px] h-[400px] rounded border-2 border-black mt-5 justify-center">
            <img className="w-full h-full" src={images[index]} alt="" />
        </div>
        <button onClick={handleBackImage} className="bg-blue-600 px-10 py-3  m-4 text-2xl text-white">back</button>
        <button onClick={handlenaxtImage} className="bg-blue-600 px-10 py-3  m-4 text-2xl text-white">Next</button>

        </div>

    </div>
}
export default ImageSlider

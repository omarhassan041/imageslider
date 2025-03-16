import { useState } from "react"



function ImageSlider(){

    const[index, setIndex] = useState(0)
    const [end, setEnd] = useState("")

const images =[

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSIJD61wPfXt6tpzA5szI1grrdpI-PZoadWg&s",
    "https://i.tribune.com.pk/media/images/saudiamoon1740756519-0/saudiamoon1740756519-0.jpg",
   "https://imgeng.jagran.com/images/2025/02/28/article/image/ramadan-2025-moon-sighting-1740760861495_v.webp",
   
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

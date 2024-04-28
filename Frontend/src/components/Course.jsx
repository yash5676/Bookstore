import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
function Course() {
  return (
   <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
<div className="mt-28 items-center justify-center text-center">
  <h1 className="text-2xl font-semibold md:text-4xl">We're delighted to have you <span className="text-pink-500">Here! :</span></h1>
  <p className="mt-12">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
  </p>

  <button className="bg-pink-500 text-white px-4 py-2 mt-6 rounded-md hover:bg-pink-700 duration-300">
    Back
  </button>
</div>
<div>
  {
  list.map((item)=>{
    <Cards item={item} key={item.id}/>
  })
  
  }
</div>
   </div>
   </>
  )
}

export default Course

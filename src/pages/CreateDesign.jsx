import React,{useEffect} from 'react'
import HeaderOfDesign from '../component/HeaderOfDesign'
const CreateDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="min-h-screen">
     <HeaderOfDesign/>
    </div>
  )
}

export default CreateDesign
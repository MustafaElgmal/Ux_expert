import React,{useEffect} from 'react'
import HeaderOfDesign from '../component/DesignerMode/HeaderOfDesign'
const CreateDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="min-h-screen">
     <HeaderOfDesign className="absolute"/>
    </div>
  )
}

export default CreateDesign
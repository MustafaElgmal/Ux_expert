import React,{useEffect} from 'react'
import { useState } from 'react'
import HeaderOfDesign from '../component/DesignerMode/HeaderOfDesign'
import { getCategories, getComponents, getComponentsTrending } from '../utils/apis'
const CreateDesign = () => {
  const [categories,setCategories]=useState([])
  const [components,setComponents]=useState([])
  const [trendingComponents,setTrendingComponents]=useState([])
  const getAllCategories=async()=>{
    await getCategories(setCategories)
  }
  const getAllComponents=async()=>{
    await getComponents(setComponents)
  }
  const getTrendingAllComponents=async()=>{
    await getComponentsTrending(setTrendingComponents)

  }
  useEffect(() => {
    window.scrollTo(0, 0)
    getAllCategories()
    getAllComponents()
    getTrendingAllComponents()
  }, [])
  return (
    <div className="min-h-screen">
     <HeaderOfDesign className="absolute" categories={categories} components={components} trendingComponents={trendingComponents}/>
    </div>
  )
}

export default CreateDesign
import axios from "axios";
import { Base_url } from "../constant";
export const getWordClassify = async (sentence, navigate) => {
  try {
    const res = await axios.post(`${Base_url}/api/search/classify`, sentence);
    navigate(`/search/${res.data.type}`);
  } catch (e) {
    console.log(e);
  }
};

export const getCategories = async (setCategories) => {
  try {
    const res = await axios.get(`${Base_url}/api/category`);
    setCategories(res.data.categories);
  } catch (e) {
    console.log(e);
  }
};
export const getComponents = async (setComponents) => {
  try {
    const res = await axios.get(`${Base_url}/api/component`);
    setComponents(res.data.components)
  } catch (e) {
    console.log(e);
  }
};
export const getComponentsByCategoryId = async (id,setComponentsFilter,setFilterSearch) => {
    try {
      const res = await axios.get(`${Base_url}/api/component/${id}`);
      setComponentsFilter(res.data.components)
      setFilterSearch(res.data.components)
    } catch (e) {
      console.log(e);
    }
  };
  export const getComponentsTrending = async (setComponents) => {
    try {
      const res = await axios.get(`${Base_url}/api/component/trending`);
      setComponents(res.data.components)
    } catch (e) {
      console.log(e);
    }
  };


import axios from "axios"

const baseUrl ="https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
const getCountriesAction =()=>async(dispatch)=>{
    try{
        dispatch({type:"GET_COUNTRIES_REQUEST"})
        const config ={
            header:{
                "content-type":"application/json"
            } 
        }
        const {data} = await axios.get(`${baseUrl}`,config)
        console.log(data)
        dispatch({
            type:"GET_COUNTRIES_SUCCESS",
            payload:data
        })
    }catch(err){
console.log(err)
let message = err.response && err.response.data.message ? err.response.data.message :err.message
dispatch({
    type:"GET_COUNTRIES_FAIL",
    payload:message
})
    }
}

export {getCountriesAction}
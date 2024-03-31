import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    deleteState : false,
    users : []

}

export const GetPopulationData = createAsyncThunk('commonSlice/GetPopulationData' , async ()=>{
      const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population', {
        method : 'GET',
      })
        const res = await response.json()
        return res
})
export const GetCryptoPrices = createAsyncThunk('commonSlice/GetCryptoPrices' , async ()=>{
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json', {
      method : 'GET',
    })
      const res = await response.json()
      return res
})


export const commonSlice = createSlice({
    name : 'commonSlice',
    initialState,
    reducers : {
       FetchSuccess(state , action){
        return{ ...state , users: action.payload}
       },
       FetchFailed(state ){
        return{...state , users : []}
       },
       DeleteSuccess(state){
        return{ ...state ,deleteState: true }
       },
       DeleteFailed(state){
        return{ ...state ,deleteState: false }
       }, 
       DeleteInitial(state){
        return{ ...state ,deleteState: false }
       }
    }
})
export const {FetchSuccess , DeleteInitial , DeleteFailed , DeleteSuccess , FetchFailed } = commonSlice.actions
export default commonSlice.reducer
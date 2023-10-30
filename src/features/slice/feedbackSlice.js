import { createSlice } from "@reduxjs/toolkit";

const feedbackSlice = createSlice({
    name:'feedback',
    initialState:{
        feedback:[],
        edit:{
            item:{},
            isEdit:false
        }
    },
    reducers:{
        remove :(state , action)=>{
            return{
                ...state,
                feedback:state.feedback.filter(item => item.id!==action.payload)
            }
        },
        addFeedback:(state , action)=>{
            return{
                ...state,
                feedback:[action.payload , ...state.feedback]
            }
        },
        editFeedback:(state , action)=>{
            return{
                ...state,
             edit:{item:action.payload , isEdit:true}
            }
        },
        updateFeedback:(state, action)=>{
            return{
                ...state,
                feedback:state.feedback.map(item => item.id === action.payload.id ? action.payload : item),
                edit:{item:{}, isEdit:false}
            }
        }
    }
})

export const {remove ,addFeedback ,editFeedback,updateFeedback} = feedbackSlice.actions

export default feedbackSlice.reducer
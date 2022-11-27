import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'reservation',
    initialState: {
        customer: '',
        reservationDate: '',
        reservationTime: '',
        numberOfGuests: 1
    },
    reducers: {
        createReservation: (state, action)=>{
            state.customer = action.payload.customer
            state.reservationDate = action.payload.reservationDate
            state.reservationTime = action.payload.reservationTime
            state.numberOfGuests = action.payload.numberOfGuests
        },
        cancelReservation: (state)=>{
            state.customer = ''
            state.reservationDate = ''
            state.reservationTime = ''
            state.numberOfGuests = 0
        }
    }
})

export const { createReservation, cancelReservation } = slice.actions
export default slice.reducer
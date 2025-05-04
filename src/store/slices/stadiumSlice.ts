import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStadium, IStadiumType } from "../../types";



export const initialState: IStadiumType = {
    stadium: [
        {
            name: 'Sariq devni minib',
            address: 'Xudoyberdi To\'xtaboyev',
            price: 200_000,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpOjmqQtce_aPC1oXztYtkH7R7jGRx_pxRg&s'
        },
        // {
        //     name: 'Sariq devni minib',
        //     address: 'Xudoyberdi To\'xtaboyev',
        //     price: 200_000
        // },
        // {
        //     name: 'Sariq devni minib',
        //     address: 'Xudoyberdi To\'xtaboyev',
        //     price: 200_000
        // },
        // {
        //     name: 'Sariq devni minib',
        //     address: 'Xudoyberdi To\'xtaboyev',
        //     price: 200_000
        // },
        // {
        //     name: 'Sariq devni minib',
        //     address: 'Xudoyberdi To\'xtaboyev',
        //     price: 200_000
        // }

    ]
}


export const stadiumSlice = createSlice ({
    name: 'StadiumSlice',
    initialState,
    reducers: {
        addStadium: (state, action: PayloadAction<IStadium>) => {
            const currentState = [...state.stadium, action.payload] 
            state.stadium = currentState;
        },
        deleteStadium: (state, action: PayloadAction<number>) => {
            const currentState = state.stadium.filter((_, i) => (i !== action.payload));
            state.stadium = currentState;
        },
        updateStadium: (state, action: PayloadAction<{ idx: number; updateStadium: IStadium }>) => {
        const { idx, updateStadium } = action.payload;
            if (state.stadium[idx]) {
                state.stadium[idx] = updateStadium;
            }
        }
    }
})




export const {addStadium, deleteStadium, updateStadium } = stadiumSlice.actions;
export default stadiumSlice.reducer;
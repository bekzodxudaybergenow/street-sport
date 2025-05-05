import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStadium, IStadiumType } from "../../types";
import stadion1 from '../../../public/stadions/stadion-1.png';
import stadion2 from '../../../public/stadions/stadion-2.png';
import stadion3 from '../../../public/stadions/stadion-3.png';
import stadion4 from '../../../public/stadions/stadion-4.png';
import stadion5 from '../../../public/stadions/stadion-5.png';
import stadion6 from '../../../public/stadions/stadion-6.png';
import stadion7 from '../../../public/stadions/stadion-7.png';
import stadion8 from '../../../public/stadions/stadion-8.png';




export const initialState: IStadiumType = {
    stadium: [
        {
            name: 'Bunyodkor stadion',
            address: 'Chilonzor 2kv',
            price: 200_000,
            url: stadion1
        },
        {
            name: 'Olmaliq Stadion',
            address: 'Chirchiq tuman',
            price: 200_000,
            url: stadion2
        },
        {
            name: 'Paxtakor stadion',
            address: 'Yakkasaroy tuman',
            price: 200_000,
            url: stadion3
        },
        {
            name: 'Bunyodkor stadion',
            address: 'Chilonzor 3kv',
            price: 210_000,
            url: stadion4
        },
        {
            name: 'Uchtepa stadion',
            address: 'Uchtepa tuman',
            price: 130_000,
            url: stadion5
        },
        {
            name: 'Lokomative stadion',
            address: 'Sergeli tumani',
            price: 100_000,
            url: stadion6
        },
        {
            name: 'Oqtepa stadion',
            address: 'Shayhontaxur tuman',
            price: 210_000,
            url: stadion7
        },
        {
            name: 'Yunusabot stadion',
            address: 'Yunusabot',
            price: 180_000,
            url: stadion8
        },
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
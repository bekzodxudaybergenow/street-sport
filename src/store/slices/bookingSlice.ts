import { createSlice } from "@reduxjs/toolkit";

export interface IBookingType {
    book: {
        name: string;
        auth: string;
        year: number;
    }[]
}

export const initialState: IBookingType = {
    book: [
        {
            name: 'Sariq devni minib',
            auth: 'Xudoyberdi To\'xtaboyev',
            year: 2024
        }
    ]
}


export const BookSlice = createSlice ({
    name: 'BookSlice',
    initialState,
    reducers: {
        addBook: () => {
            console.log('State stared...')
        }
    }
})




export const {addBook} = BookSlice.actions;
export default BookSlice.reducer;
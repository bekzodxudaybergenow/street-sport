/* Obyektimiz uchun tur */
export interface IStadium {
    name: string;
    address: string;
    price: number;
    url: string;
}

/* Ro'yxatimiz uchun tur */
export interface IStadiumType {
    stadium: IStadium[];
}
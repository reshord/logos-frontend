export type CardInfo = {
    id: number,
    image: string,
    title: string,
    count: number,
    description: string,
    weight: string,
    price: number,
    popular: number
}
export type LogoutType = {
    email: string,
}

export type orderProd = {
    id: number,
    image: string,
    title: string,
    count: number,
    description: string,
    weight: string,
    price: number,
    popular: number
}


export interface FieldValues {
    email?: string
    password?: string | number
    confirmPassword?: string | number,
}
export interface ReviewsTypes {
    email?: string
    id?: number
    name?: string,
    body?: string,
    params?: number
}
export type PayloadData = {
    payload: {
        message: string
        token: string
        user: {
            confirmPassword: string
            email: string
            password: string
            __v: number
            _id: string
        }
    }
}   
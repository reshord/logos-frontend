export interface CardInfo {
    id: number,
    image: string,
    title: string,
    count: number,
    description: string,
    weight: string,
    price: number,
    popular: number
}


export interface LogoutType {
    email: string,
}

export interface orderProd {
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
    name?: string
    email?: string
    password?: string | number
    confirmPassword?: string | number,
}
export interface ReviewsTypes {
    id?: number
    email?: string,
    body?: string,
    params?: number
}
export interface PayloadData {
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

export interface prodInCartType {
    id: number
    prodActive: boolean
}

export interface prodChange {
 payload: {
     id: number
     totalCount: number
 }
}

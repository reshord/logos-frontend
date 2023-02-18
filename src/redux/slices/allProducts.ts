import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardInfo } from "../../types/types";
// import {addProducts} from '../../axios'

interface initialStateProducts {
    products: {
        СoldSnacks: CardInfo[],
        HotAppetizers: CardInfo[],
        FishMeals: CardInfo[],
        Soups: CardInfo[],
        MeatDishes: CardInfo[],
    }
    status: string
}

const initialState: initialStateProducts = {
    products: {
        СoldSnacks: [
            {"id": 1, "image": "https://i.ibb.co/kBYBQRS/gus.png", "title": "Гусь", "count": 1, "description": "Фаршированный яблоками", "weight": "225", "price": 7900, "popular": 1},
            {"id": 2, "image": "https://i.ibb.co/NN09QJB/Ytka.png", "title": "Утка", "count": 1, "description": "Фаршированная рисом, кураго и айвой", "weight": "225", "price": 220, "popular": 1},
            {"id": 3, "image": "https://i.ibb.co/Lh6MXRS/Yagnenok.png", "title": "Ягненок", "count": 1, "description": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 520, "popular": 1},
            {"id": 4, "image": "https://i.ibb.co/2Kxn7vk/Indeyka.png", "title": "Индейка", "count": 1, "description": "Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 1620, "popular": 1},
            {"id": 5, "image": "https://i.ibb.co/2Kxn7vk/Indeyka.png", "title": "Индейка", "count": 1, "description": "Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 1620, "popular": 1},
            
        ],
        HotAppetizers: [
            {"id": 6, "image": "https://i.ibb.co/kBYBQRS/gus.png", "title": "Тартар из свинины", "count": 1, "description": "Фаршированный яблоками", "weight": "225", "price": 7900, "popular": 1},
            {"id": 7, "image": "https://i.ibb.co/NN09QJB/Ytka.png", "title": "Папаши из норвежского лосося", "count": 1, "description": "Фаршированная рисом, кураго и айвой", "weight": "225", "price": 220, "popular": 1},
            {"id": 8, "image": "https://i.ibb.co/Lh6MXRS/Yagnenok.png", "title": "Бриош с гуакамоле и креветками", "count": 1, "description": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 520, "popular": 1},
            {"id": 9, "image": "https://i.ibb.co/2Kxn7vk/Indeyka.png", "title": "Бриош из гуакамоле и тартаром из лосося", "count": 1, "description": "Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 1620, "popular": 1},
            {"id": 10, "image": "https://i.ibb.co/2Kxn7vk/Indeyka.png", "title": "Бриош с гуакамоле и фреш-салатом", "count": 1, "description": "Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 1620, "popular": 1},
            
        ],
        FishMeals: [
            {"id": 11, "image": "https://i.ibb.co/kBYBQRS/gus.png", "title": "Вителo Тонато", "count": 1, "description": "Фаршированный яблоками", "weight": "225", "price": 7900, "popular": 1},
            {"id": 12, "image": "https://i.ibb.co/NN09QJB/Ytka.png", "title": "Стейк Рибай", "count": 1, "description": "Фаршированная рисом, кураго и айвой", "weight": "225", "price": 220, "popular": 1},
            {"id": 13, "image": "https://i.ibb.co/Lh6MXRS/Yagnenok.png", "title": "Бургер со свининой", "count": 1, "description": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 520, "popular": 1},
            {"id": 14, "image": "https://i.ibb.co/2Kxn7vk/Indeyka.png", "title": "Утка в азиатском стиле", "count": 1, "description": "Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 1620, "popular": 1},
            {"id": 15, "image": "https://i.ibb.co/2Kxn7vk/Indeyka.png", "title": "Стейк из лосося с сезонным гарниром", "count": 1, "description": "Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 1620, "popular": 1},
        ],
        Soups: [
            {"id": 16, "image": "https://i.ibb.co/kBYBQRS/gus.png", "title": "Грибной крем-суп", "count": 1, "description": "Фаршированный яблоками", "weight": "225", "price": 7900, "popular": 1},
            {"id": 17, "image": "https://i.ibb.co/NN09QJB/Ytka.png", "title": "Томатный суп с морепродуктами на кокосовом молоке", "count": 1, "description": "Фаршированная рисом, кураго и айвой", "weight": "225", "price": 220, "popular": 1},
            {"id": 18, "image": "https://i.ibb.co/Lh6MXRS/Yagnenok.png", "title": "Арахисовый суп", "count": 1, "description": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 520, "popular": 1},
            {"id": 19, "image": "https://i.ibb.co/2Kxn7vk/Indeyka.png", "title": "Бергенский рыбный суп", "count": 1, "description": "Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 1620, "popular": 1},
            {"id": 20, "image": "https://i.ibb.co/2Kxn7vk/Indeyka.png", "title": "Ахиако", "count": 1, "description": "Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 1620, "popular": 1},
            
        ],
        MeatDishes: [
            {"id": 21, "image": "https://i.ibb.co/kBYBQRS/gus.png", "title": "Рыба по-гречески", "count": 1, "description": "Фаршированный яблоками", "weight": "225", "price": 7900, "popular": 1},
            {"id": 22, "image": "https://i.ibb.co/NN09QJB/Ytka.png", "title": "Рыба под маринадом", "count": 1, "description": "Фаршированная рисом, кураго и айвой", "weight": "225", "price": 220, "popular": 1},
            {"id": 23, "image": "https://i.ibb.co/Lh6MXRS/Yagnenok.png", "title": "Рыбный плов", "count": 1, "description": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 520, "popular": 1},
            {"id": 24, "image": "https://i.ibb.co/2Kxn7vk/Indeyka.png", "title": "Рыбные шарики", "count": 1, "description": "Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 1620, "popular": 1},
            {"id": 25, "image": "https://i.ibb.co/2Kxn7vk/Indeyka.png", "title": "Треска в кляре", "count": 1, "description": "Фаршированная гречневой кашей, курагой, апельсином и зеленым яблоком", "weight": "225", "price": 1620, "popular": 1},
            
        ]
    },
    status: ''
}

const allProducts = createSlice({
    name: 'allProducts',
    initialState,
    reducers: {
        filterCardsPopular: (state) => {
            state.products.СoldSnacks = [...state.products.СoldSnacks.sort((a, b) => a.popular - b.popular)]
            state.products.HotAppetizers = [...state.products.HotAppetizers.sort((a, b) => a.popular - b.popular)]
            state.products.FishMeals = [...state.products.FishMeals.sort((a, b) => a.popular - b.popular)]
            state.products.Soups = [...state.products.Soups.sort((a, b) => a.popular - b.popular)]
            state.products.MeatDishes = [...state.products.MeatDishes.sort((a, b) => a.popular - b.popular)]
        },
        filterCardsPriceLess: (state) => {
            state.products.СoldSnacks = [...state.products.СoldSnacks.sort((a, b) => a.price - b.price)]
            state.products.HotAppetizers = [...state.products.HotAppetizers.sort((a, b) => a.price - b.price)]
            state.products.FishMeals = [...state.products.FishMeals.sort((a, b) => a.price - b.price)]
            state.products.Soups = [...state.products.Soups.sort((a, b) => a.price - b.price)]
            state.products.MeatDishes = [...state.products.MeatDishes.sort((a, b) => a.price - b.price)]
        },
        filterCardsPriceMore: (state) => {
            state.products.СoldSnacks = [...state.products.СoldSnacks.sort((a, b) => b.price - a.price)]
            state.products.HotAppetizers = [...state.products.HotAppetizers.sort((a, b) => b.price - a.price)]
            state.products.FishMeals = [...state.products.FishMeals.sort((a, b) => b.price - a.price)]
            state.products.Soups = [...state.products.Soups.sort((a, b) => b.price - a.price)]
            state.products.MeatDishes = [...state.products.MeatDishes.sort((a, b) => b.price - a.price)]
        }
    },
})

export const { filterCardsPopular, filterCardsPriceLess,  filterCardsPriceMore} = allProducts.actions


export default allProducts.reducer
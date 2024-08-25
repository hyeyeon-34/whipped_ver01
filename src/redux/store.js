import { configureStore, createSlice } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';

// item slice 정의
const item = createSlice({
    name: 'item',
    initialState: [
        { id: 0, title: "휩드 딸바 비건 클렌저", content: "item01content", price: 10000 },
        { id: 1, title: "휩드 머그트리 비건 클렌저", content: "item02content", price: 20000 },
        { id: 2, title: "휩드 라보카도 비건 클렌저", content: "item03content", price: 30000 },
        { id: 3, title: "휩드 호호벤더 비건 클렌저", content: "item04content", price: 40000 },
        { id: 4, title: "휩드 무화버터 비건 클렌저", content: "item05content", price: 50000 },
        { id: 5, title: "DIY", content: "item06content", price: 60000 }
    ]
});

// store 정의 및 slice 등록
const store = configureStore({
    reducer: {
        auth: authSlice.reducer,  // authSlice를 사용할 경우
        item: item.reducer
    }
});

// store를 export
export default store;
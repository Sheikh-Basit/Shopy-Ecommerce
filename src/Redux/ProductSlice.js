import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('products/fetchproducts',
    async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        return data;
    }
)
const ProductSlice = createSlice({
    name:"products",
    initialState:{
        items:[],
        loading: false,
        error: null
    },
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(fetchProducts.pending, (state)=>{
            state.loading = true;

        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.items = action.payload;
            state.loading = false;

        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message

        })
    }
}
)

export default ProductSlice.reducer;
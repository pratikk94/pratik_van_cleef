import { createSlice } from "@reduxjs/toolkit";

const deleteProductsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        deletedProducts: [],
        uploadedProducts: [],
    },
    reducers: {
        setProducts: (state, { payload }) => {
            state.products = payload
        },
        setDeletedProducts: (state, { payload }) => {
            state.deletedProducts = payload
        },
        setUploadedProducts: (state, { payload }) => {
            state.uploadedProducts = payload
        },
    }
})

export const { setProducts, setUploadedProducts, setDeletedProducts } = deleteProductsSlice.actions
export default deleteProductsSlice.reducer
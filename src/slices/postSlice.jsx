import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts', async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        console.log('data',data);
        return data.map((p) => ({ ...p}));
    });



const initialState = {
    posts : [],
    loading : false,
    currentPage: 1,
    pageSize: 6,
    view: 'grid',
    error: null,
};

export const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
       setLoading(state, action) {
        state.loading = action.payload;
       },
       deletePost(state, action) {
        state.posts = state.posts.filter(p => p.id !== action.payload);

        const totalPages = Math.max(1, Math.ceil(state.posts.length / state.pageSize));
        if (state.currentPage > totalPages) {
            state.currentPage = totalPages;
        }
       },
         setPage(state, action) {
        state.currentPage = action.payload;
       },
         toggleview(state, action) {
        state.view = state.view === 'grid' ? 'list' : 'grid';
       },
       resetPosts(state, action) {
        state.posts = action.payload;
        state.currentPage = 1;
    }
},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.pending, (state) => {
            state.error = null;
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            console.log("fecthp", action.payload);
            state.posts = action.payload;
            state.error = null;
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.error = action.error.message;
        });
    }
});

export const  {  setLoading , deletePost , setPage , toggleview, resetPosts } = postSlice.actions;

export default postSlice.reducer;
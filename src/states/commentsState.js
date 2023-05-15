import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// gestione chiamate api tramite redux con slice si crea una porzione di store dedicata allo stato dei commenti

const initialState = {
  comments: [],
  isLoading: false,
  error: "",
};

export const getCommentsFromBook = createAsyncThunk(
  // primo parametro dev'essere una stringa che descrive cosa sta facendo funzione
  "commentsFromBook/getCommentsFromBook",
  async (asin) => {
    // la costante sempre dopo aver dichiarato la funzione
    const endpoint = `https://striveschool-api.herokuapp.com/api/comments/${asin}`;
    try {
      const data = await fetch(endpoint, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWQ5ZmIxNGE1MTAwMTQ2NjQwMDUiLCJpYXQiOjE2ODMzMTI2NjAsImV4cCI6MTY4NDUyMjI2MH0.72_8Ghdn3dYZ-2Rx5Fk5pLumoX8KP1pvriQjB-RrU04",
        },
      });
      const response = await data.json();
      return response;
    } catch (error) {
      if (error) throw new Error("Errore generico");
    }
  }
);

const commentsFromBookSlice = createSlice({
  name: "commentsFromBook",
  initialState,
  // questa e' una reducer di redux
  extraReducers: (builder) => {
    // gestiamo i tre casi della funzione async
    builder
      .addCase(getCommentsFromBook.pending, (state) => {
        // se e' in pending loading deve essere true
        state.isLoading = true;
      })
      .addCase(getCommentsFromBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments =
          action.payload;
      })
      .addCase(getCommentsFromBook.rejected, (state) => {
        state.isLoading = false;
        state.error = "C'è un errore";
      });
  },
});

export const commentsLoading = (state) => state.commentsSlice.isLoading
export const commentsError = (state) => state.commentsSlice.error
export const arrayOfComments = (state) => state.commentsSlice.comments
export default commentsFromBookSlice.reducer
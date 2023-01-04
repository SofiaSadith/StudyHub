import { createSlice } from '@reduxjs/toolkit';

// Cada Slice es parte del Estado Global de la Aplicación
export const cursoSlice = createSlice({
  name: 'curso',
  initialState: {
    curso: '',
  },
  reducers: {
    setCurso: (state, action) => {
      state.curso = action.payload;
    },
    getCurso: (state) => {
      return state.curso;
    }
  },
});

export const { setCurso, getCurso } = cursoSlice.actions;

export default cursoSlice.reducer;

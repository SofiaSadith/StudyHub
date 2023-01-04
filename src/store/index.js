import { configureStore } from '@reduxjs/toolkit';
//reducer
import curso from './slices/cursos';

export default configureStore({
  reducer: {
    curso,
  },
});

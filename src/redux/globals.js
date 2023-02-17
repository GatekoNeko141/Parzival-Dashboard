import { createSlice } from '@reduxjs/toolkit'

export const AuthSesion = createSlice({
  name: 'sesion',
  initialState: {
    objectTest: 0,
    navList: [
      {
        title: 'Inicio',
        tag: 'divisor'
      },
      {
        title: 'Dashboard',
        icon: 'home',
        path: '/'
      }
    ]
  },
  reducers:{
    SET_SOMETHING: (state, action) => {
      state.objectTest = action.payload
    }
  }
})

export const { SET_SOMETHING } = AuthSesion.actions
export default AuthSesion.reducer
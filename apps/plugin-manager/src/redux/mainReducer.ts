import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MainStateInterface {
  projectId: string
}

const initialState: MainStateInterface = {
  projectId: '',
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setProjectId: (state, action: PayloadAction<string>) => {
      state.projectId = action.payload
    },
    reset: () => initialState,
  },
})

export const { setProjectId, reset } = mainSlice.actions

export default mainSlice.reducer

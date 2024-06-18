/**
 * Slice component
 * @author - Faizal
 * @date - 15th June 2024
 */
// GENERIC IMPORT
import { createSlice } from '@reduxjs/toolkit';

// ANIMATE TYPE
export type animateType = {
  animationData?: any | null;
  targetLayerName?: "";
}

// INITIAL STATE
const initialState: animateType = {
    animationData: null,
    targetLayerName: ""
};

// REDUCER
const animateSlice = createSlice({
  name: 'animate',
  initialState,
  reducers: {
    updateAnimateData: (state, action) => {
      state.animationData = action.payload.animationData;
    },
    updateTargetName: (state, action) => {
      state.targetLayerName = action.payload.targetLayerName;
    }
  }
});

export const { updateAnimateData, updateTargetName } = animateSlice.actions;

export default animateSlice.reducer;

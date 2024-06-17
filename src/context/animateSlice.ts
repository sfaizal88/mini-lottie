/**
 * Slice component
 * @author - Faizal
 * @date - 15th June 2024
 */
// GENERIC IMPORT
import { createSlice } from '@reduxjs/toolkit';

export type animateType = {
  animationData?: any | null;
  targetLayerName?: "";
}
const initialState: animateType = {
    animationData: null,
    targetLayerName: ""
};

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

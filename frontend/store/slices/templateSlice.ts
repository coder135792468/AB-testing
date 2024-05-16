import { createSlice } from "@reduxjs/toolkit";

const template: any = {
  templates: [],
};

const templateSlice = createSlice({
  name: "template",
  initialState: template,
  reducers: {
    setTemplate: (state, action) => {
      state.templates = action.payload;
    },
    deleteTemplate: (state, action) => {
      state.templates = state.templates.filter(
        (state: any) => state._id !== action.payload
      );

      return state;
    },
    addTemplate: (state, action) => {
      state.templates = [...state.templates, action.payload];
      return state;
    },
  },
});

export const { setTemplate, deleteTemplate, addTemplate } =
  templateSlice.actions;
export { templateSlice };

import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'DATA',
  initialState: {
    days: [],
    exercises: [],
    exerciseInfo: {},
  },
  reducers: {
    getDays: state => {
      state.days = [
  	{
    	  id:1,
    	  type:"push",
  	},
  	{
    	  id:2,
    	  type:"pull",
  	},
  	{
    	  id:3,
    	  type:"leg",
  	},
  	{
    	  id:4,
    	  type:"push",
  	},
      ]
    },
    getExercises: state => {
      state.exercises = [
  	{
    	  id:1,
    	  name: 'pull up',
    	  sets: 1,
  	},
  	{
    	  id:2,
    	  name: 'squat',
    	  sets: 3,
  	},
  	{
    	  id:3,
    	  name: 'dead lift',
    	  sets: 5,
  	},
  	{
    	  id:4,
    	  name: 'bench press',
    	  sets: 3,
  	},
      ]
    },
    getExerciseInfo: state => {
      state.exerciseInfo = {
	name: '',
	type: '',
	sets: [
  	  {
    	    id:1,
    	    reps: 10,
    	    weight: 10,
  	  },
  	  {
    	    id:2,
    	    reps: 8,
    	    weight: 20,
  	  },
  	  {
    	    id:3,
    	    reps: 8,
    	    weight: 25,
  	  },
  	  {
    	    id:4,
    	    reps: 7,
    	    weight: 25,
  	  },
	],
      }
    },
  }
})

// Action creators are generated for each case reducer function
export const { getDays, getExercises, getExerciseInfo } = counterSlice.actions

export default counterSlice.reducer

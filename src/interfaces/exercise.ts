// this is the interface for my exercises

export interface IUser { 
  id: {type: Number, required: true},
  name: {type: String, required: true},
  targetArea: {type: Number, required: true},
  }
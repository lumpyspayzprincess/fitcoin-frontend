// this is the interface for my user

export interface IUser { 
  id: {type: Number, required: true},
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  imageURL: {type: String},
  }
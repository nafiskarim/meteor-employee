import { Mongo } from 'meteor/mongo'

// creating an empty Collection
export const Employees = new Mongo.Collection('employees')

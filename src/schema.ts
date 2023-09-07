import { Schema, createTable } from "./lib/schema"

export const person = createTable({
  name: "person",
  key: "id",
  columns: {
    id: {
      type: "number",
    },
    name: {
      type: "string",
    },
    age: {
      type: "number",
    },
  },
})

export const car = createTable({
  name: "car",
  key: "id",
  columns: {
    id: {
      type: "number",
    },
    make: {
      type: "string",
    },
    model: {
      type: "string",
    },
    ownerId: {
      type: "number",
    },
  },
})

export const dbSchema: Schema = {
  person,
  car,
}
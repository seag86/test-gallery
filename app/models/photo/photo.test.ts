import { PhotoModel } from "./photo"

test("can be created", () => {
  const instance = PhotoModel.create({
    id: 1,
    name: "Photo1",
  })

  expect(instance).toBeTruthy()
})

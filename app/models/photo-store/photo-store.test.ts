import { CharacterStoreModel } from "./photo-store"

test("can be created", () => {
  const instance = CharacterStoreModel.create({})

  expect(instance).toBeTruthy()
})

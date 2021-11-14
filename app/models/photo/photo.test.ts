import { PhotoModel } from "./photo"

test("can be created", () => {
  const instance = PhotoModel.create({
    id: 0,
    author: "Alejandro Escamilla",
    width: 5616,
    height: 3744,
    url: "https://unsplash.com/photos/yC-Yzbqy7PY",
    download_url: "https://picsum.photos/id/0/5616/3744",
  })

  expect(instance).toBeTruthy()
})

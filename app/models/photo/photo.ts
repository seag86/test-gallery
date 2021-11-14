import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const PhotoModel = types.model("Photo").props({
  id: types.maybe(types.number),
  author: types.maybe(types.string),
  width: types.maybe(types.number),
  height: types.maybe(types.number),
  url: types.maybe(types.string),
  download_url: types.maybe(types.string),
})

type PhotoType = Instance<typeof PhotoModel>
export interface Photo extends PhotoType {}
type PhotoSnapshotType = SnapshotOut<typeof PhotoModel>
export interface PhotoSnapshot extends PhotoSnapshotType {}
export const createPhotoDefaultModel = () => types.optional(PhotoModel, {})

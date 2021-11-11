import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const PhotoModel = types.model("Photo").props({
  id: types.identifierNumber,
  name: types.maybe(types.string),
  status: types.maybe(types.string),
  image: types.maybe(types.string),
})

type PhotoType = Instance<typeof PhotoModel>
export interface Photo extends PhotoType {}
type PhotoSnapshotType = SnapshotOut<typeof PhotoModel>
export interface PhotoSnapshot extends PhotoSnapshotType {}
export const createPhotoDefaultModel = () => types.optional(PhotoModel, {})

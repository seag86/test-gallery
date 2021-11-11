import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { PhotoModel, PhotoSnapshot } from "../photo/photo"
import { PhotoApi } from "../../services/api/photo-api"
import { withEnvironment } from "../extensions/with-environment"


export const PhotoStoreModel = types
  .model("PhotoStore")
  .props({
    photos: types.optional(types.array(PhotoModel), []),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    savePhotos: (photoSnapshots: PhotoSnapshot[]) => {
      self.photos.replace(photoSnapshots)
    },
  }))
  .actions((self) => ({
    getPhotos: async () => {
      const photoApi = new PhotoApi(self.environment.api)
      const result = await photoApi.getPhotos()

      if (result.kind === "ok") {
        self.savePhotos(result.photos)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    },
  }))

type PhotoStoreType = Instance<typeof PhotoStoreModel>
export interface PhotoStore extends PhotoStoreType {}
type PhotoStoreSnapshotType = SnapshotOut<typeof PhotoStoreModel>
export interface PhotoStoreSnapshot extends PhotoStoreSnapshotType {}
export const createPhotoStoreDefaultModel = () => types.optional(PhotoStoreModel, {})

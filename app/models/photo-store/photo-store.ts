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
    saveTags: (photoTags) => {
      self.tags.replace(photoTags)
    },
  }))
  .actions((self) => ({
    getPhotos: async (page: Number, limit: number) => {
      const photoApi = new PhotoApi(self.environment.api)
      const result = await photoApi.getPhotos(page, limit)

      if (result.kind === "ok") {
        self.savePhotos(result.photos)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    },
    getDetails: async (id: Number) => {
      const photoApi = new PhotoApi(self.environment.api)
      const result = await photoApi.getDetails(id)

      if (result.kind === "ok") {
        //self.saveDetails(result.info)
        console.log('getDetails result', result)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    },
    getTags: async (page: Number, limit: number) => {
      const photoApi = new PhotoApi(self.environment.api)
      const result = await photoApi.getPhotos(page, limit)

      const sortAuthors = (d: Array<any>) => {
        const authors = d.reduce((acc, element) => {
          const [key, Name] = Object.entries(element)[1];
          (acc[Name] || (acc[Name] = [])).push(element);
          return acc;
        }, {});
  
        const _tags: Array<any> = []
        for (const author in authors) {
          _tags.push({
            author: author,
            photos: authors[author]
          })
        }
        return _tags
      }

      if (result.kind === "ok") {

        const tags = sortAuthors(result.photos)
        return tags
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

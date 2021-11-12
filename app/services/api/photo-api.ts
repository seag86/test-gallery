import { ApiResponse } from "apisauce"
import { Api } from "./api"
import { GetPhotosResult } from "./api.types"
import { getGeneralApiProblem } from "./api-problem"

const API_PAGE_SIZE = 50

export class PhotoApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async getPhotos(page: Number = 0, limit: Number = 5): Promise<GetPhotosResult> {
    try {
      //console.log('get', `https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
      // make the api call
      const response: ApiResponse<any> = await this.api.apisauce.get(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
        // { amount: API_PAGE_SIZE },
      )

      // the typical ways to die when calling an api
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      const photos = response.data
      //console.log('response', response.data)
      return { kind: "ok", photos }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async getDetails(id: Number = 0): Promise<GetPhotosResult> {
    try {
      //console.log('get', `https://picsum.photos/id/${id}/info`)
      // make the api call
      const response: ApiResponse<any> = await this.api.apisauce.get(
        `https://picsum.photos/id/${id}/info`,
      )

      // the typical ways to die when calling an api
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      const photos = response.data
      console.log('response', response.data)
      return { kind: "ok", photos }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}

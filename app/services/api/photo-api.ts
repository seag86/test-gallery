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

  async getPhotos(): Promise<GetPhotosResult> {
    try {
      // make the api call
      const response: ApiResponse<any> = await this.api.apisauce.get(
        "https://picsum.photos/v2/list?limit=6",
        // "https://raw.githubusercontent.com/infinitered/ignite/master/data/rick-and-morty.json",
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
}

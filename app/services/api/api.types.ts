import { GeneralApiProblem } from "./api-problem"
import { Character } from "../../models/character/character"
import { Photo } from "../../models/photo/photo"

export interface User {
  id: number
  name: string
}

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem

export type GetCharactersResult = { kind: "ok"; characters: Character[] } | GeneralApiProblem
export type GetCharacterResult = { kind: "ok"; character: Character } | GeneralApiProblem

export type GetPhotosResult = { kind: "ok"; photos: Photo[] } | GeneralApiProblem
export type GetPhotoResult = { kind: "ok"; photo: Photo } | GeneralApiProblem

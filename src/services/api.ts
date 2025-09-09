import axios from "axios"
import { URL } from "../constants"
import type { ICharacter, IResponse } from "../types/character"

export const getAllCharacters = async () => {
    try {
        const response = await axios.get<{ characters: IResponse[] }>(`${URL}`)

        const characters: ICharacter[] = response.data.characters.map(character => ({
            id: character.id,
            name: character.name,
            image: character.images[0] ?? null,
            debut: character.debut.anime ?? null,
            jutsu: character.jutsu.slice(0, 5),
            birthdate: character.personal.birthdate ?? null,
            clan: Array.isArray(character.personal.clan) ? character.personal.clan[0] : character.personal.clan ?? null
        }))

        return characters
    } catch (error) {
        console.error(`Ошибка: ${error}`)
    }
}

export const getCharacterById = async (id: string | undefined) => {
    try {
        const response = await axios.get<IResponse>(`${URL}/${id}`)
        const data = response.data

        const character: ICharacter  = {
            id: data.id,
            name: data.name,
            image: data.images[0] ?? null,
            debut: data.debut.anime ?? null,
            // jutsu: data.jutsu.slice(0, 5),
            birthdate: data.personal.birthdate ?? null,
            clan: Array.isArray(data.personal.clan) ? data.personal.clan[0] : data.personal.clan ?? null,
            family: data.family,
        }
        return character
    } catch (error) {
        console.error(`Ошибка: ${error}`)
    }
}

export const getCharacterByName = async (name: string | undefined) => {
    try {
        const response = await axios.get<{ characters: IResponse[] }>(`${URL}?name=${name}`)
        const data = response.data.characters[0]

        const character: ICharacter  = {
            id: data.id,
            name: data.name,
            image: data.images[0] ?? null,
            debut: data.debut?.anime ?? null,
            // jutsu: data?.jutsu.slice(0, 5) || null,
            birthdate: data.personal.birthdate ?? null,
            clan: Array.isArray(data.personal.clan) ? data.personal.clan[0] : data.personal.clan ?? null,
            family: data.family ?? {},
        }
        return character
    } catch (error) {
        console.error(`Ошибка: ${error}`)
    }
}
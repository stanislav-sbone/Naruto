import axios from "axios"
import { URL } from "../constants"
import type { ICharacter, IResponse } from "../types/character"
import type { IBeast, IBeastResponse } from "../types/beast"

export const getAllCharacters = async () => {
    try {
        const response = await axios.get<{ characters: IResponse[] }>(`${URL}/characters`)

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
        const response = await axios.get<IResponse>(`${URL}/characters/${id}`)
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
        const response = await axios.get<{ characters: IResponse[] }>(`${URL}/characters?name=${name}`)
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

export const getAllBeasts = async () => {
    try {
        const response = await axios.get<{ 'tailed-beasts': IBeastResponse[] }>(`${URL}/tailed-beasts`)
        const data = response.data['tailed-beasts']

        const beasts: IBeast[] = data.map((beast) => ({
            id: beast.id,
            name: beast.name,
            image: beast.name === 'Kurama' ? 'https://avatars.mds.yandex.net/i?id=730f8d89d38b889918a1be180bae3bd5_l-4876504-images-thumbs&n=13' : beast.images[0],
            jinchuriki: beast.personal['jinchūriki']
        }))
        
        return beasts
    } catch (error) {
        console.error(`Ошибка: ${error}`)
    }
}
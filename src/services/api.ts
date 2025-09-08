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
export interface IResponse {
    id: string
    name: string
    images: string[]
    debut: {
        anime?: string
        manga?: string
        novel?: string
        game?: string
    }
    jutsu: string[]
    personal: {
        birthdate?: string
        clan?: string | string[]
    }
}

export interface ICharacter {
    id: string,
    name: string,
    image: string | null,
    debut: string | null,
    jutsu: string[],
    birthdate: string | null,
    clan: string | null,
}

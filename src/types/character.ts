export interface IFamily {
  father?: string;
  mother?: string;
  son?: string;
  daughter?: string;
  wife?: string;
"adoptive son"?: string;
  godfather?: string;
  [key: string]: string | undefined;
}

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
    family: IFamily
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
    jutsu?: string[] | null,
    birthdate: string | null,
    clan: string | null,
    family?: IFamily,
}

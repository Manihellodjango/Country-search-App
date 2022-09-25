export interface CountryTS {
    name:string,
    nativeName:string,
    capital: string,
    population: number,
    region: string,
    subregion: string,
    flags: {
        png:string
    },
    topLevelDomain: [
        string
    ],
    currencie: [
        {
           name:string
        }
    ],
    languages: [
        {
            name:string
        }
    ],
    borders: [
        string
    ]

}
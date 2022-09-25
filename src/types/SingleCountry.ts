export interface SingleCountryTS {
    name:string,
    nativeName:string,
    capital: string,
    population: number,
    region: string,
    subregion: string,
    flag: string,
    topLevelDomain: string,
    
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
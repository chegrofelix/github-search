export class User {

    constructor (
        public name:string,
        public login: string,
        public followers: number,
        public following: number,
        public avatar_url?: string,
        public url?: string
        
    ) {}
}

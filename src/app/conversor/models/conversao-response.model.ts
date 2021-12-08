export class ConversaoResponse{
    constructor(
        public base: string,
        public date: string,
        public rates: any
    ) {}
}

// base: "USD"
// date: "22/11/2021"
// rates: {"BRL":3.1405}
export class Item {
    constructor(
        public id: number,
        public price: number,
        public title: string,
        public phonenumber: string,
        public email: string,
        public address?: string,
        public imagepath?: number,
        public status?: string,
        public fullname?: string,
        public description?: string,
        public _id?:string
    ) {  }
}
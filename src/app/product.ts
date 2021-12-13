export class Product{
    id : number  = 0;
    name : string = '';
    cost : number = 0;
    constructor(id : number ,name : string ,cost : number){
        this.id = id;
        this.name = name;
        this.cost = cost;
    }
}
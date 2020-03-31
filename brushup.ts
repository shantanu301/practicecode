export class User{
    constructor(private speed?:number,private rpm?:number,private model?:string){
        this.speed = speed
        this.rpm = rpm
        this.model = model

    }
}

let nv = new User();
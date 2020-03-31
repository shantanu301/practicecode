import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IotService {

  changeVal : number = 0

  constructor() { }

  inc(){
    return ++this.changeVal
  }
  dec(){
    return --this.changeVal
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
   getUuid():string{
    return crypto.randomUUID()
  }
}

import { Injectable } from '@angular/core';
import { Kitap } from './Kitap.model';

@Injectable({
  providedIn: 'root'
})
export class KitapService {

 
  kitapList : Kitap[] = [

    {name:"furkan",code:"123d",id:"1"},
    {name:"Lotr",code:"xc234",id:"2"},
    {name:"Hobbit",code:"g54645",id:"3"},
    {name:"Yavru",code:"vfdsr5",id:"4"},
    {name:"Prens",code:"h6573w",id:"5"}

  ];
  
  constructor() { }

  getKitapList() : Kitap[] {
    return this.kitapList;
  }

}

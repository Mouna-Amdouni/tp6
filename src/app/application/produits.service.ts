import { Injectable } from '@angular/core';
import { Produit } from './Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  products =[
    new Produit(15, 'montre'),
    new Produit(32, 'cartable'),
    new Produit(45, 'cahier'),
    new Produit(96, 'tablier')
  ];
  public getProduitByID(i:number):Produit{
  
  for(var p=0;p < this.products.length ;p++){
    if(this.products[p].id==i)
    {return this.products[p] ;}
  
  }

  return null ;
}
public addProduit(i: number, l:string):boolean{
  if(this.getProduitByID(i)==null){
  this.products.push(new Produit(i,l));
  return true;
  }
  else return false;
}


 constructor() { }

}

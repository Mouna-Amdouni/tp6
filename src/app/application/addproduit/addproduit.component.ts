import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ProduitsService } from '../produits.service';
import { Produit } from '../Produit';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
 constructor( private produitsService:ProduitsService) { }
libelle:string;
identifiant:number;
 message="Votre nouveau produit …. a bien été ajouté";
  message1="Le produit existe déjà !";
  submitted:boolean=false;
onSubmit(f:NgForm)
 { console.log(this.identifiant+ " "+ this.libelle);
 console.log("-- "+f.value['id']+" "+ f.value['lib']);
 this.submitted=true;
 this.produitsService.addProduit(f.value['id'],f.value['lib']);
}
 
  ngOnInit() {
  }

}

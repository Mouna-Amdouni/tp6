export class Produit
{ private _id:number;
  private _libelle:string;
    public get libelle(): string {
        return this._libelle;
    }
    public set libelle(value: string) {
        this._libelle = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    constructor(private i: number, private l: string)
    {    
        this._libelle=l;
        this._id=i;
    }
}
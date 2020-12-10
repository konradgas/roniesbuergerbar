export interface IMenuItem {
  id: string;
  name: string;
  price: number;
}

export interface IMenu {
  Burgers: IMenuItem[];
  Sides: IMenuItem[];
  Drinks: IMenuItem[];
}

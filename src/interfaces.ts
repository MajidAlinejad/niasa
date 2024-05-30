export interface IPersons {
  gender: 'female' | 'male';
  currentWeight: number;
  height: number;
  FitnessLevel: string;
  foodTaste: string;
  lifestyle: string;
  Metabolism: string;
  availablePlans: IAvailablePlans[];
}

export interface IAvailablePlans {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  discountPrice?: number;
  popular?: boolean;
}

export interface IPersons {
  gender: 'female' | 'male';
  currentWeight: number;
  height: number;
  FitnessLevel: string;
  foodTaste: string;
  lifestyle: string;
  Metabolism: string;
  availablePlans: IAvailablePlans[];
  lossPercent: number;
  loss: {
    w: number;
    bar: number;
  }[];
  bmi: {
    value: number;
    percent: number;
    decribe: string;
    icon: string;
  };
}

export interface IAvailablePlans {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  discountPrice?: number;
  popular?: boolean;
}

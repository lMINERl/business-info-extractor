export interface DataModel {
  _id: number;
  name: string;
  state: WorkingState;
  productivity: { value: number; isIncreased: boolean };
}

export enum WorkingState {
  working = 'working',
  ide = 'ide',
  holiday = 'holiday'
}

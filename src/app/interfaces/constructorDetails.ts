export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export interface ConstructorTable {
  constructorId: string;
  Constructors: Constructor[];
}

export interface MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  ConstructorTable: ConstructorTable;
}

export interface RootObject {
  MRData: MRData;
}

import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ApartmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Apartment {
  readonly id: string;
  readonly alias?: string | null;
  readonly address?: string | null;
  readonly area?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Apartment, ApartmentMetaData>);
  static copyOf(source: Apartment, mutator: (draft: MutableModel<Apartment, ApartmentMetaData>) => MutableModel<Apartment, ApartmentMetaData> | void): Apartment;
}
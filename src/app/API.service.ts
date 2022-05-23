/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateApartment: OnCreateApartmentSubscription;
  onUpdateApartment: OnUpdateApartmentSubscription;
  onDeleteApartment: OnDeleteApartmentSubscription;
};

export type CreateApartmentInput = {
  id?: string | null;
  alias?: string | null;
  address?: string | null;
  area?: number | null;
  _version?: number | null;
};

export type ModelApartmentConditionInput = {
  alias?: ModelStringInput | null;
  address?: ModelStringInput | null;
  area?: ModelFloatInput | null;
  and?: Array<ModelApartmentConditionInput | null> | null;
  or?: Array<ModelApartmentConditionInput | null> | null;
  not?: ModelApartmentConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Apartment = {
  __typename: "Apartment";
  id: string;
  alias?: string | null;
  address?: string | null;
  area?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateApartmentInput = {
  id: string;
  alias?: string | null;
  address?: string | null;
  area?: number | null;
  _version?: number | null;
};

export type DeleteApartmentInput = {
  id: string;
  _version?: number | null;
};

export type ModelApartmentFilterInput = {
  id?: ModelIDInput | null;
  alias?: ModelStringInput | null;
  address?: ModelStringInput | null;
  area?: ModelFloatInput | null;
  and?: Array<ModelApartmentFilterInput | null> | null;
  or?: Array<ModelApartmentFilterInput | null> | null;
  not?: ModelApartmentFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelApartmentConnection = {
  __typename: "ModelApartmentConnection";
  items: Array<Apartment | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type CreateApartmentMutation = {
  __typename: "Apartment";
  id: string;
  alias?: string | null;
  address?: string | null;
  area?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateApartmentMutation = {
  __typename: "Apartment";
  id: string;
  alias?: string | null;
  address?: string | null;
  area?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteApartmentMutation = {
  __typename: "Apartment";
  id: string;
  alias?: string | null;
  address?: string | null;
  area?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetApartmentQuery = {
  __typename: "Apartment";
  id: string;
  alias?: string | null;
  address?: string | null;
  area?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListApartmentsQuery = {
  __typename: "ModelApartmentConnection";
  items: Array<{
    __typename: "Apartment";
    id: string;
    alias?: string | null;
    address?: string | null;
    area?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncApartmentsQuery = {
  __typename: "ModelApartmentConnection";
  items: Array<{
    __typename: "Apartment";
    id: string;
    alias?: string | null;
    address?: string | null;
    area?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateApartmentSubscription = {
  __typename: "Apartment";
  id: string;
  alias?: string | null;
  address?: string | null;
  area?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateApartmentSubscription = {
  __typename: "Apartment";
  id: string;
  alias?: string | null;
  address?: string | null;
  area?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteApartmentSubscription = {
  __typename: "Apartment";
  id: string;
  alias?: string | null;
  address?: string | null;
  area?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateApartment(
    input: CreateApartmentInput,
    condition?: ModelApartmentConditionInput
  ): Promise<CreateApartmentMutation> {
    const statement = `mutation CreateApartment($input: CreateApartmentInput!, $condition: ModelApartmentConditionInput) {
        createApartment(input: $input, condition: $condition) {
          __typename
          id
          alias
          address
          area
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateApartmentMutation>response.data.createApartment;
  }
  async UpdateApartment(
    input: UpdateApartmentInput,
    condition?: ModelApartmentConditionInput
  ): Promise<UpdateApartmentMutation> {
    const statement = `mutation UpdateApartment($input: UpdateApartmentInput!, $condition: ModelApartmentConditionInput) {
        updateApartment(input: $input, condition: $condition) {
          __typename
          id
          alias
          address
          area
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateApartmentMutation>response.data.updateApartment;
  }
  async DeleteApartment(
    input: DeleteApartmentInput,
    condition?: ModelApartmentConditionInput
  ): Promise<DeleteApartmentMutation> {
    const statement = `mutation DeleteApartment($input: DeleteApartmentInput!, $condition: ModelApartmentConditionInput) {
        deleteApartment(input: $input, condition: $condition) {
          __typename
          id
          alias
          address
          area
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteApartmentMutation>response.data.deleteApartment;
  }
  async GetApartment(id: string): Promise<GetApartmentQuery> {
    const statement = `query GetApartment($id: ID!) {
        getApartment(id: $id) {
          __typename
          id
          alias
          address
          area
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetApartmentQuery>response.data.getApartment;
  }
  async ListApartments(
    filter?: ModelApartmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListApartmentsQuery> {
    const statement = `query ListApartments($filter: ModelApartmentFilterInput, $limit: Int, $nextToken: String) {
        listApartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            alias
            address
            area
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListApartmentsQuery>response.data.listApartments;
  }
  async SyncApartments(
    filter?: ModelApartmentFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncApartmentsQuery> {
    const statement = `query SyncApartments($filter: ModelApartmentFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncApartments(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            alias
            address
            area
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncApartmentsQuery>response.data.syncApartments;
  }
  OnCreateApartmentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateApartment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateApartment {
        onCreateApartment {
          __typename
          id
          alias
          address
          area
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateApartment">>
  >;

  OnUpdateApartmentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateApartment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateApartment {
        onUpdateApartment {
          __typename
          id
          alias
          address
          area
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateApartment">>
  >;

  OnDeleteApartmentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteApartment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteApartment {
        onDeleteApartment {
          __typename
          id
          alias
          address
          area
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteApartment">>
  >;
}

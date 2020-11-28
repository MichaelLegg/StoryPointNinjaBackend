export interface Session {
  joinCode: string;
  clients: Client[];
  roundState: "scoring" | "revealing" | "creating";
  scoringMethod: ScoringMethod;
}

export interface Client {
  displayName: string;
  submitted: boolean;
}

export enum ScoringMethod {
  Fibbonaci,
  ModifiedFibbonaci,
}

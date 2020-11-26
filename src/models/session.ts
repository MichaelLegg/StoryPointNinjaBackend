export interface Session {
  joinCode: string;
  clients: Client[];
  roundState: "scoring" | "revealing" | "creating";
}

export interface Client {
  submitted: boolean;
}

import { ScoringMethod } from "../session";

export default interface NewSession {
  displayName: string;
  sessionName: string;
  scoringMethod: ScoringMethod;
}

import * as Nouns from "../words/nouns.json";
import * as Verbs from "../words/verbs.json";
import * as Adjectives from "../words/adjectives.json";
import { Session } from "../models/session";

export function generateJoinCode(sessions: { [k: string]: Session }): string {
  let joinCode: string;
  do {
    joinCode = buildCode();
  } while (
    sessions &&
    Object.values(sessions).some((x: Session) => x.joinCode === joinCode)
  );
  return joinCode;
}

function buildCode(): string {
  const verb = Verbs[Math.floor(Math.random() * Object.keys(Verbs).length)];
  const adjective =
    Adjectives[Math.floor(Math.random() * Object.keys(Adjectives).length)];
  const noun = Nouns[Math.floor(Math.random() * Object.keys(Nouns).length)];
  return verb + adjective + noun;
}

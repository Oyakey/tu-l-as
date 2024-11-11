import { Name, Sentence, Verb } from "./types";

export function startsWithVowel(string: string) {
  return /^[aeiouy]/.test(
    string.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
  );
}

export function generateSentence(verb: Verb, name: Name): Sentence {
  const determinant =
    name.nombre == "p"
      ? "les "
      : startsWithVowel(name.ortho)
        ? "l'"
        : name.genre == "f"
          ? "la "
          : "le ";

  const pronom = startsWithVowel(verb.ortho) ? "S'" : "Se ";

  return {
    pronom,
    verb: verb.ortho,
    determinant,
    name: name.ortho,
  };
}

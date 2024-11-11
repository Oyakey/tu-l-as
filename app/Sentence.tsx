"use client";
import { useCallback, useMemo, useState } from "react";
import { Name, Verb } from "./types";
import { generateSentence } from "./helpers";
import Refresh from "./icons/Refresh";

interface SentenceProps {
  verbs: Verb[];
  names: Name[];
}

const Sentence = (props: SentenceProps) => {
  const [verbIndex, setVerbIndex] = useState(
    Math.floor(Math.random() * props.verbs.length),
  );
  const [nameIndex, setNameIndex] = useState(
    Math.floor(Math.random() * props.names.length),
  );

  const sentence = useMemo(
    () => generateSentence(props.verbs[verbIndex], props.names[nameIndex]),
    [props.verbs, props.names, verbIndex, nameIndex],
  );

  const refreshVerb = useCallback(() => {
    setVerbIndex(Math.floor(Math.random() * props.verbs.length));
  }, [props.verbs]);

  const refreshName = useCallback(() => {
    setNameIndex(Math.floor(Math.random() * props.names.length));
  }, [props.names]);

  return (
    <div className="flex flex-col justify-center text-center gap-16 pt-16">
      <div className="text-3xl md:text-4xl xl:text-6xl">
        {sentence.pronom}
        <button
          className="hover:text-purple-500 transition"
          onClick={() => refreshVerb()}
        >
          {sentence.verb}
        </button>{" "}
        {sentence.determinant}
        <button
          className="hover:text-blue-500 transition"
          onClick={() => refreshName()}
        >
          {sentence.name}
        </button>
        .
      </div>
      <button
        className="bg-white/10 hover:bg-white/20 transition rounded-lg p-3 w-fit mx-auto"
        onClick={() => {
          refreshVerb();
          refreshName();
        }}
      >
        <Refresh className="fill-white w-8" />
      </button>
    </div>
  );
};

export default Sentence;

import { promises as fs } from "fs";
import { Name, Verb } from "./types";
import Sentence from "./Sentence";

export default async function Home() {
  const verbsText = await fs.readFile(
    process.cwd() + "/app/verbs.json",
    "utf8",
  );
  const namesText = await fs.readFile(
    process.cwd() + "/app/names.json",
    "utf8",
  );

  const verbs: Verb[] = JSON.parse(verbsText);
  const names: Name[] = JSON.parse(namesText);

  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 items-center justify-center mx-auto">
        <Sentence verbs={verbs} names={names} />
      </main>
    </div>
  );
}

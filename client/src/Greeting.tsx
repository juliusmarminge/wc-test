import { trpc } from "./utils/trpc";

export function Greeting() {
  const greeting = trpc.greeting.useQuery({ name: "tRPC user" });

  return (
    <div className="text-zinc-200 p-8">
      <h1 className="text-2xl font-bold">{greeting.data?.text}</h1>
    </div>
  );
}

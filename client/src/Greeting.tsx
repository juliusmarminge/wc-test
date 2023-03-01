import { trpc } from "./utils/trpc";

export function Greeting() {
  const greeting = trpc.greeting.useQuery({ name: "tRPC user" });

  return <div className="text-zinc-200">{greeting.data?.text}</div>;
}

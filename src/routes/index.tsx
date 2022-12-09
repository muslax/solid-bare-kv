import { Title, useRouteData } from "solid-start";
import { createServerData$, redirect } from "solid-start/server";
import Counter from "~/components/Counter";

export function routeData() {
  return createServerData$(async (_, { request, env }) => {
    const entries = await env.SOLID.list();
    console.log(entries);

    return entries;
  });
}

export default function Home() {
  const entries = useRouteData<typeof routeData>();
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <pre>ENTRIES: {JSON.stringify(entries, null, 2)}</pre>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}

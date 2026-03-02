import type { Route } from "./+types/home";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "smart feedback for your resume" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">

    <section className="main-section">
      <div className="page-heading">
        <h1> Track your Applications & Resume Rating</h1>
        <h2>Review and improve your resume with AI</h2>
      </div>
    </section>
  </main>
}

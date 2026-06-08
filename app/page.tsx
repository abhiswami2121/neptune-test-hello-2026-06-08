export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Hello, Neptune!
        </h1>
        <p className="text-lg text-muted-foreground">
          This project was automatically created and deployed by the Neptune Chat new_project wizard.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://nextjs.org/docs"
            className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
          <a
            href="https://github.com/abhiswami2121/neptune-test-hello-2026-06-08"
            className="rounded-md border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
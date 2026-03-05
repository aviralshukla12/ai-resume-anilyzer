import { usePuterStore } from "~/lib/puter";

export const meta = () => ([
    { title: 'Resumemid | Auth' },
    { name: 'description', content: 'Login in to your account' },
])



export default function Auth() {
    const { isLoading, auth } = usePuterStore();
    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
            <div className="gradient-border shadow-lg">
                <section className="flex flex-col gap-8  bg-white rounded-2xl p-10">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1>Welcome</h1>
                        <h2>Login to continue your job journey</h2>
                    </div>
                    <div>
                        {isLoading ? (
                            <button className="auth-button animate-pulse">
                                <p>Signning you in...</p>

                            </button>
                        ) : (
                            <>
                            </>
                        )}
                    </div>

                </section>

            </div>

        </main>
    );
}
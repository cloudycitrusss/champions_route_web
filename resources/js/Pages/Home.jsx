import { Head } from '@inertiajs/react';

export default function Home({ banner }) {
    return (
        <>
            <Head title="Coming Soon" />
            <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
                <section className="w-full max-w-3xl rounded-3xl border border-amber-300/30 bg-slate-900 px-8 py-16 text-center shadow-2xl shadow-black/40">
                    <p className="text-sm font-medium uppercase tracking-[0.35em] text-amber-300">
                        Champions Route
                    </p>
                    <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                        {banner}
                    </h1>
                </section>
            </main>
        </>
    );
}

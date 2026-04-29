import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />

            <main className="min-h-screen bg-[#f7f7f5] px-6 py-8 text-[#1b1b18] dark:bg-[#0f0f10] dark:text-[#ededec]">
                <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center">
                    <section className="w-full max-w-2xl rounded-3xl border border-[#dfdfd9] bg-white p-10 text-center shadow-sm dark:border-[#2f2f33] dark:bg-[#17171a]">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7b7b74] dark:text-[#9a9a93]">
                            Starter Kit React
                        </p>
                        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                            Simple base, no auth scaffold.
                        </h1>
                        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#66665f] dark:text-[#a1a19a]">
                            A clean Laravel and React starting point for projects that do
                            not need login, registration or password flows out of the box.
                        </p>
                    </section>
                </div>
            </main>
        </>
    );
}

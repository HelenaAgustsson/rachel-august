import Credits from "@/components/credits";

export default async function Page() {
    return (
        <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
            <h1 className="text-4xl font-bold">Rachel August</h1>
            <hr />
            <h2 className="text-2xl font-bold">Credits</h2>
            <Credits />
        </section>
    );
}
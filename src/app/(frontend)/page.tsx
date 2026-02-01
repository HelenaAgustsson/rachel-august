import Credits from "@/components/credits/credits";
import { Header } from "@/components/header/header";

export default async function Page() {
    return (
        <div>
            <Header />
            <main className="flex justify-center md:justify-start m-5 md:ml-20 md:pl-10">
                <section className="md:w-2/3 p-5 bg-orange-100 text-red-dark rounded-md">
                    <h3 className="text-xl font-bold">Hi!</h3>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </section>
            </main>
        </div>

    );
}
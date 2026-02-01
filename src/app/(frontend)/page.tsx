
import { Header } from "@/components/header/header";
import Profile from "@/components/profile";

export default async function Page() {

    return (
        <div>
            <Header />
            <main className="flex justify-center md:justify-start m-5 md:ml-20 md:pl-10">
                <Profile />
            </main>
        </div>

    );
}
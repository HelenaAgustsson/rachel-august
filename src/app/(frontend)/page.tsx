
import { Header } from "@/components/header/header";
import Profile from "@/components/profile";

export default async function Page() {

    return (
        <div>
            <Header />
            <main className="flex justify-center m-5">
                <Profile />
            </main>
        </div>

    );
}
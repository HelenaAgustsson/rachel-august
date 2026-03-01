
import { PAGE_QUERYResult } from "@/sanity/types";

type PageBuilderProps = {
    content: NonNullable<PAGE_QUERYResult>["content"];
};

export function PageBuilder({ content }: PageBuilderProps) {
    if (!Array.isArray(content)) {
        return null;
    }

    return (
        <main>

        </main>
    );
}
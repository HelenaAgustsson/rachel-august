
import { PAGE_QUERYResult } from "@/sanity/types";
import SummaryBlock from "./summary";

type PageBuilderProps = {
    content: NonNullable<PAGE_QUERYResult>["content"];
};

export function PageBuilder({ content }: PageBuilderProps) {
    if (!Array.isArray(content)) {
        return null;
    }

    return (
        <main>
            {content.map((block, index) => {
                return <SummaryBlock key={index} title={block.title} body={block.body} />
            })}
        </main>
    );
}
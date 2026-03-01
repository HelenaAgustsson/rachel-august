
import { PAGE_QUERYResult } from "@/sanity/types";
import SummaryBlock from "./summary";
import { Summary } from "@/sanity/types";

type PageBuilderProps = {
    content: NonNullable<PAGE_QUERYResult>["content"];
};

type BlockProps = {
    title: string,
    body: string
}

export function PageBuilder({ content }: PageBuilderProps) {
    if (!Array.isArray(content)) {
        return null;
    }

    return (
        <main>
            {content.map((block, index) => {
                switch (block._type) {
                    case "summary":
                        return <SummaryBlock key={index} title={block.title} body={block.body} />
                    default:
                        // This is a fallback for when we don't have a block type
                        return <div key={index}></div>;
                }
            })}
        </main>
    );
}
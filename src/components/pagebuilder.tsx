
import { PAGE_QUERYResult } from "@/sanity/types";
import Textblock from "./textblock";

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
                return <Textblock key={index} title={block.title} body={block.body} />
            })}
        </main>
    );
}

import { PAGE_QUERYResult } from "@/sanity/types";
import Section from "./section/section";
import { PortableText } from "next-sanity";

type SummaryProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "summary" }
>;

type SummaryBlockProps = Pick<SummaryProps, "title" | "body">

const SummaryBlock = ({ title, body }: SummaryBlockProps) => {
    return (
        <Section>
            <h4 className="text-xl font-bold mb-5">{title}</h4>
            <PortableText value={body} />
        </Section>

    )
}

export default SummaryBlock;
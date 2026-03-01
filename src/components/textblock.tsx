
import { PAGE_QUERYResult } from "@/sanity/types";
import Section from "./section/section";
import { PortableText } from "next-sanity";

type TextblockProps = Extract<
    NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
    { _type: "textblock" }
>;

const Textblock = ({ title, body }: Pick<TextblockProps, "title" | "body">) => {
    return (
        <Section>
            <h4 className="text-xl font-bold mb-5">{title}</h4>
            <PortableText value={body} />
        </Section>

    )
}

export default Textblock;
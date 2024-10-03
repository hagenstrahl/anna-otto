import { OutlineButton } from "./button";
import Heading, { HeadingType } from "./heading";

const ContentSection: React.FC<{
  title: string;
  content: string;
  buttonText: string;
  alignment: "left" | "right";
}> = ({ title, content, buttonText, alignment }) => (
  <section
    className={`flex justify-center p-6 ml-8 bg-white rounded-xl w-80 ${alignment === "right" ? "ml-auto mr-10" : ""}`}
  >
    <div>
      <Heading
        type={HeadingType.H2}
        className={`mt-4 text-5xl ${alignment === "left" ? "text-left" : "text-right"}`}
      >
        {title}
      </Heading>
      <p className={`mt-4 mb-4 text-lg text-${alignment} font-text text-grau`}>
        {content}
      </p>
      <div className={alignment === "right" ? "flex justify-end" : ""}>
        <OutlineButton>{buttonText}</OutlineButton>
      </div>
    </div>
  </section>
);

export default ContentSection;

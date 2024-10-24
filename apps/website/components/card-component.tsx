import Button from "./button";
import Heading, { HeadingType } from "./heading";

interface CardComponentProps {
  title: string;
  content: string;
  buttonText: string;
  alignment: "left" | "right";
}

const CardComponent = ({
  title,
  content,
  buttonText,
  alignment,
}: CardComponentProps) => (
  <section
    data-testid="feature-section"
    className={`flex justify-center p-6 ml-8 bg-white rounded-xl w-80 ${
      alignment === "right" ? "ml-auto mr-10" : ""
    }`}
  >
    <div>
      <Heading
        type={HeadingType.H2}
        className={`mt-4 text-5xl ${
          alignment === "left" ? "text-left" : "text-right"
        }`}
      >
        {title}
      </Heading>
      <p
        data-testid="content"
        className={`mt-4 mb-4 text-lg font-text text-grau ${
          alignment === "left" ? "text-left" : "text-right"
        }`}
      >
        {content}
      </p>
      <div className={alignment === "right" ? "flex justify-end" : ""}>
        <Button type="secondary">{buttonText}</Button>
      </div>
    </div>
  </section>
);

export default CardComponent;

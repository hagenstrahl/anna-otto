import Button from "./button";
import Heading, { HeadingVariant } from "./heading";
import { ClassNameProps, TestIdProps } from "./utils";

export interface CardProps extends ClassNameProps, TestIdProps {
  title: string;
  content: string;
  buttonText: string;
  alignment: "left" | "right";
}

const Card = ({ title, content, buttonText, alignment, testId }: CardProps) => (
  <div
    className={`px-8 flex justify-${alignment === "right" ? "end" : "start"}`}
  >
    <section
      className={`flex flex-col justify-center p-6 bg-white rounded-xl w-80`}
      data-testid="card"
    >
      <Heading
        variant={HeadingVariant.H2}
        className={`mt-4 text-5xl text-${alignment}`}
        testId={testId}
      >
        {title}
      </Heading>
      <p
        className={`mt-4 mb-4 text-lg font-text text-grau text-${alignment}`}
        data-testid="card-content"
      >
        {content}
      </p>
      <div className={alignment === "right" ? "flex justify-end" : ""}>
        <Button variant="secondary" testId={testId}>
          {buttonText}
        </Button>
      </div>
    </section>
  </div>
);

export default Card;

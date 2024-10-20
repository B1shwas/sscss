import { HeadingProps } from "@/lib/interfaces";

const Heading: React.FC<HeadingProps> = (props) => {
  const { subtitle, title } = props;
  return (
    <>
      <p className="text-link text-primary uppercase tracking-wide font-medium">
        {subtitle}
      </p>
      <h2 className="text-title font-semibold">{title}</h2>
    </>
  );
};

export default Heading;

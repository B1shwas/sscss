import { BenefitCardProps } from "@/lib/interfaces";

const BenefitDetailCard: React.FC<BenefitCardProps> = (props) => {
  const { Icon, title, paragraph } = props;
  return (
    <div className="bg-white rounded-sm p-4 space-y-2">
      <Icon className="text-3xl text-primary" />
      <p className="text-paragraph font-semibold">{title}</p>
      <p className="text-link">{paragraph}</p>
    </div>
  );
};

export default BenefitDetailCard;

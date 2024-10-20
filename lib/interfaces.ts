export interface ContactInfoItemProps {
  icon: JSX.Element;
  text: string;
}

export interface NavLinks {
  label: string;
  subtitle?: {
    label: string;
    href: string;
  }[];
  href?: "string";
}

export interface HeadingProps {
  subtitle: string;
  title: string;
}

export interface BenefitCardProps {
  Icon: React.ElementType;
  title: string;
  paragraph: string;
}

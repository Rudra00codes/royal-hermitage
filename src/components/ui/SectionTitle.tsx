
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, center = false, className = "" }: SectionTitleProps) => {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold font-playfair text-royal-primary mb-3">
        {title}
      </h2>
      {subtitle && <p className="text-royal-accent text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;

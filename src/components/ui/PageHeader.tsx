
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <div 
      className="relative bg-royal-primary py-24 md:py-32 px-4 mb-16"
      style={backgroundImage ? { 
        backgroundImage: `linear-gradient(rgba(28, 56, 121, 0.85), rgba(28, 56, 121, 0.85)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      <div className="container mx-auto text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-4">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;


interface PropertyTypePillProps {
  type: string;
  active?: boolean;
  onClick?: () => void;
}

const PropertyTypePill = ({ type, active = false, onClick }: PropertyTypePillProps) => (
  <button
    onClick={onClick}
    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
      active ? 'bg-white text-black' : 'bg-white/20 text-white hover:bg-white/30'
    }`}
  >
    {type}
  </button>
);

export default PropertyTypePill;

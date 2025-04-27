
interface FilterPillProps {
  label: string;
  active?: boolean;
}

const FilterPill = ({ label, active = false }: FilterPillProps) => (
  <span
    className={`px-4 py-1.5 rounded-full text-sm font-medium ${
      active
        ? "bg-gray-800 text-white"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
  >
    {label}
  </span>
);

export default FilterPill;

const FilterBar = ({ filters, setFilters, handleSearch }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Expertise Area
        </label>
        <select
          value={filters.expertise}
          onChange={e => setFilters({ ...filters, expertise: e.target.value })}
          className="input-professional"
        >
          <option value="">All Expertise</option>
          <option value="Career Development">Career Development</option>
          <option value="Technology Leadership">Technology Leadership</option>
          <option value="Personal Development">Personal Development</option>
          <option value="Business Strategy">Business Strategy</option>
          <option value="Communication Skills">Communication Skills</option>
          <option value="Financial Planning">Financial Planning</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Skills
        </label>
        <input
          type="text"
          placeholder="e.g., Leadership, Communication"
          value={filters.skill}
          onChange={e => setFilters({ ...filters, skill: e.target.value })}
          className="input-professional"
        />
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Available Date
        </label>
        <input
          type="date"
          value={filters.date}
          onChange={e => setFilters({ ...filters, date: e.target.value })}
          className="input-professional"
        />
      </div>
      
      <div className="flex items-end">
        <button
          onClick={handleSearch}
          className="btn btn-primary w-full"
        >
          Search Coaches
        </button>
      </div>
    </div>
  );
};

export default FilterBar;

const popularFilters = () => {
  const filters = [
    { label: "Breakfast Included", count: 12 },
    { label: "Romantic", count: 6 },
    { label: "Airport Transfer", count: 25 },
    { label: "WiFi Included", count: 50 },
    { label: "5 Star", count: 60 },
  ];

  return (
    <>
      {filters.map((filter, index) => (
        <div key={index} className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{filter.label}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{filter.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default popularFilters;

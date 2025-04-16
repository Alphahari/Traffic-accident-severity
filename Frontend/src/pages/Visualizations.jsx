import React, { useState, useEffect } from 'react';

const Visualizations = () => {
  const [graphs, setGraphs] = useState([]);

  useEffect(() => {
    const graphFiles = [
      'severity_by_day_of_week.png',
      'Correlation Heatmap.png',
      'severity_by_road_class.png',
      'light_conditions_vs_severity.png',
      'severity_by_weather_conditions.png',
      'road_type_vs_severity.png',
      'speed_limit_vs_severity.png',
      'junction_detail_vs_severity.png',
    ];
    setGraphs(graphFiles);
  }, []);

  return (
    <div class="bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <h1 className="text-3xl font-semibold text-center text-gray-800">Data Visualizations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {graphs.length > 0 ? (
          graphs.map((graph, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={`/graphs/${graph}`} // Tailwind class will be applied here
                alt={`Graph ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">Loading graphs...</p>
        )}
      </div>
    </div>
  );
};

export default Visualizations;

import React, { useState, useMemo } from 'react';
import './Heavy.css';

const Heavy = ({ items }) => {
  const [filterTerm, setFilterTerm] = useState('');
  const [computationTime, setComputationTime] = useState(0);

  const filterItems = (items, term) => {
    return items.filter(item => item.toString().includes(term));
  };

  const filteredItems = useMemo(() => {
    const startTime = performance.now();
    const result = filterItems(items, filterTerm);
    const endTime = performance.now();
    setComputationTime(endTime - startTime);
    return result;
  }, [items, filterTerm]);

  const handleFilterChange = e => {
    setFilterTerm(e.target.value);
  };

  return (
    <div className="HeavyComputationContainer">
      <input
        type="text"
        placeholder="Enter filter term"
        value={filterTerm}
        onChange={handleFilterChange}
      />
      <div>
        <h3>Filtered Items:</h3>
        <ul>
          {filteredItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      {computationTime > 0 && (
        <p>Computation Time: {computationTime.toFixed(2)} milliseconds</p>
      )}
    </div>
  );
};

export default Heavy;

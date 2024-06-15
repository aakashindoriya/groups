import React from 'react';
import { useSelector } from 'react-redux';

const ShowStatus = () => {
  const groups = useSelector((state) => state.group.groups);
  const status = useSelector((state) => state.group.status);

  return (
    <div>
      <h2>Status</h2>
      {groups.map((group, index) => (
        <div key={index}>
          Group {index + 1}: {group.from} - {group.to}
          <div>
            {Array.from({ length: group.to - group.from + 1 }, (_, i) => (
              <div key={group.from + i}>
                Item {group.from + i}: {status[group.from + i - 1] ? 'Done' : 'Not Done'}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowStatus;

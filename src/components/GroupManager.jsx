import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addGroup, deleteGroup, setGroups } from '../redux/actions';

const GroupManager = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.group.groups);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [error, setError] = useState('');

  const validateGroups = (newGroups) => {
    if (newGroups.length === 0) return true;

    const sortedGroups = newGroups.sort((a, b) => a.from - b.from);

    // Check for gaps and overlaps
    for (let i = 0; i < sortedGroups.length - 1; i++) {
      if (sortedGroups[i].to + 1 !== sortedGroups[i + 1].from) {
        setError('Groups should cover the entire range from 1 to 10 without gaps or overlaps.');
        return false;
      }
    }

    // Check range
    if (sortedGroups[0].from !== 1 || sortedGroups[sortedGroups.length - 1].to !== 10) {
      setError('Groups should cover the entire range from 1 to 10.');
      return false;
    }

    return true;
  };

  const validateNoOverlap = (newGroup, existingGroups) => {
    for (let group of existingGroups) {
      if (
        (newGroup.from >= group.from && newGroup.from <= group.to) ||
        (newGroup.to >= group.from && newGroup.to <= group.to)
      ) {
        return false;
      }
    }
    return true;
  };

  const handleAddGroup = () => {
    const newFrom = parseInt(from);
    const newTo = parseInt(to);

    if (isNaN(newFrom) || isNaN(newTo) || newFrom >= newTo) {
      setError('Invalid group range. "From" should be less than "To".');
      return;
    }

    if (newFrom < 1 || newTo > 10) {
      setError('Group range must be within 1 to 10.');
      return;
    }

    const newGroup = { from: newFrom, to: newTo };

    if (!validateNoOverlap(newGroup, groups)) {
      setError('Groups should not overlap.');
      return;
    }

    setError('');
    dispatch(addGroup(newFrom, newTo));
    setFrom('');
    setTo('');
  };

  const handleDeleteGroup = (index) => {
    const newGroups = groups.filter((_, i) => i !== index);
    setError('');
    dispatch(setGroups(newGroups));
  };

  const handleValidateAllGroups = () => {
    if (validateGroups(groups)) {
      setError('All groups are valid and cover the entire range.');
    }
  };

  return (
    <div>
      <h2>Groups</h2>
      {groups.map((group, index) => (
        <div key={index}>
          Group {index + 1}: {group.from} - {group.to}
          <button onClick={() => handleDeleteGroup(index)}>Delete</button>
        </div>
      ))}
      <div>
        <input
          type="number"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="number"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <button onClick={handleAddGroup}>Add Group</button>
      </div>
      <button onClick={handleValidateAllGroups}>Validate All Groups</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default GroupManager;

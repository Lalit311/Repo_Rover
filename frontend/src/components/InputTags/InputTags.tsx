import React, { useState } from 'react';

const InputTags = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 border rounded bg-white">
      {tags.map((tag, index) => (
        <div key={index} className="flex items-center gap-1 px-2 py-1 bg-blue-500 text-white rounded">
          <span>{tag}</span>
          <button onClick={() => removeTag(tag)} className="text-white focus:outline-none">
            &times;
          </button>
        </div>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a tag"
        className="flex-grow p-1 outline-none border-none focus:ring-0 rounded-lg"
      />
    </div>
  );
};

export default InputTags;

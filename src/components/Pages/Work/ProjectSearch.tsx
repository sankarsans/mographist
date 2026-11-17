import React, { useState } from 'react';

const ProjectSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) onSearch('');
  };

  return (
    <>
      <style>{`
        .project-search-wrapper {
          width: 100%;
          max-width: 300px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        .project-search-box {
          display: flex;
          align-items: center;
          width: 100%;
          height: 52px;
          padding: 0 1.25rem;
          background-color: #ffffff;
          border: 1.5px solid #e2e2e2;
          border-radius: 14px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .project-search-box.focused {
          border-color: #4f3cc9;
        }

        .project-search-icon {
          display: flex;
          align-items: center;
          color: #555555;
          margin-right: 0.85rem;
          flex-shrink: 0;
        }

        .project-search-input {
          flex: 1;
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          font-size: 1.05rem;
          color: #333333;
          caret-color: #4f3cc9;
        }

        .project-search-input::placeholder {
          color: #7a7a7a;
        }

        .project-search-clear {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          padding: 4px;
          margin-left: 0.5rem;
          color: #1f2329;
          cursor: pointer;
          border-radius: 50%;
          transition: background-color 0.15s ease;
        }

        .project-search-clear:hover {
          background-color: #f3f3f3;
        }
      `}</style>

      <div className="project-search-wrapper">
        <div
          className={`project-search-box ${isFocused || query ? 'focused' : ''}`}
        >
          {/* Show magnifying glass only when empty/unfocused */}
          {!isFocused && !query && (
            <span className="project-search-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
          )}

          <input
            type="text"
            className="project-search-input"
            placeholder="Search projects..."
            value={query}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleChange}
          />

          {/* Show clear (X) button when there is text */}
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="project-search-clear"
              aria-label="Clear search"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectSearch;

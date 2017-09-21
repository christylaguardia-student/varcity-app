import React from 'react';

export function TextInput({ value, prop, label, change }) {
  return (
    <label className="label">
      {label}
      <input
        className="input"
        value={value || ''}
        name={prop}
        type="text"
        placeholder={label}
        onChange={change} />
    </label>
  );
}

export function UrlInput({ value, prop, label, change }) {
  return (
    <label className="label">
      {label}
      <input
        className="input"
        value={value || ''}
        name={prop}
        type="text"
        placeholder={label}
        onChange={change} />
    </label>
  );
}

export function NumberInput({ value, prop, label, change }) {
  return (
    <label className="label">
      {label}
      <input
        className="input"
        value={value || 0}
        name={prop}
        type="number"
        placeholder={label}
        onChange={change} />
    </label>
  );
}

export function Checkbox({ value, prop, label, change }) {
  return (
    <label className="checkbox">
      <input
        className="checkbox"
        value={value || false}
        name={prop}
        type="checkbox"
        onChange={change} />
      <span>{label}</span>
    </label>
  );
}

export function DateInput({ value, prop, label, change }) {
  return (
    <label className="label">
      {label}
      <input
        className="input"
        value={value || '1987-04-23' }
        name={prop}
        type="date"
        placeholder={label}
        onChange={change} />
    </label>
  );
}

export function Dropdown({ value, prop, label, options, change }) {
  return (
    <label className="label">
      {label}
      <select
        className="input"
        value={value || options[0]}
        name={prop}
        onChange={change}>

        {options.map((text, index) => {
          return <option key={index} value={text}>{text}</option>;
        })}

      </select>
    </label>
  );
}

export function TextArea({ value, prop, label, change }) {
  return (
    <label className="label">
      {label}
      <textarea
        className="input"
        value={value || ''}
        name={prop}
        rows="10"
        cols="50"
        onChange={change} />
    </label>
  );
}

export function ToggleEditor({ text, editModeOn, toggleFn }) {
  const iconClass = editModeOn ? 'fa fa-times fa-lg' : 'fa fa-pencil fa-lg';
  const buttonText = editModeOn ? 'Cancel Edit' : `Edit ${text}`;

  return (
    <div>
      <p className="control" onClick={toggleFn}>
        <a className="button">
          <span className="icon is-small">
            <i className={iconClass}></i>
          </span>
          <span>{buttonText}</span>
        </a>
      </p>
    </div>
  );
}
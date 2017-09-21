import React from 'react';

export function TextInput({ value, prop, label, change }) {
  return (
    <label className="label">
      {label}
      <input
        className="input"
        value={value}
        name={prop}
        type="text"
        placeholder={label}
        onChange={change} />
    </label>
  );
}

export function NumberInput({ prop, label, change }) {
  return (
    <label className="label">
      {label}
      <input
        className="input"
        value={prop}
        name={prop}
        type="number"
        placeholder={label}
        onChange={change} />
    </label>
  );
}

export function Checkbox({ prop, label, change }) {
  return (
    <label className="checkbox">
      {label}
      <input
        className="checkbox"
        value={prop}
        name={prop}
        type="checkbox"
        onChange={change} />
    </label>
  );
}

export function DateInput({ prop, label, change }) {
  return (
    <label className="label">
      {label}
      <input
        className="input"
        value={prop}
        name={prop}
        type="date"
        placeholder={label}
        onChange={change} />
    </label>
  );
}

export function Dropdown({ prop, label, options, change }) {
  return (
    <label className="label">
      {label}
      <select
        className="input"
        value={prop.value}
        name={prop}
        onChange={change}>

        {options.map((text, index) => {
          return <option key={index} value={text}>{text}</option>;
        })}

      </select>
    </label>
  );
}

export function TextArea({ prop, label, change }) {
  return (
    <label className="label">
      {label}
      <textarea
        className="input"
        value={prop}
        name={prop}
        rows="10"
        cols="50"
        onChange={change} />
    </label>
  );
}

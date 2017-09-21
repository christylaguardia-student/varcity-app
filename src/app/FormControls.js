import React from 'react';

export function TextInput({ prop, label, change, value }) {
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

export function NumberInput({ prop, label, change, value }) {
  return (
    <label className="label">
      {label}
      <input
        className="input"
        value={value}
        name={prop}
        type="number"
        placeholder={label}
        onChange={change} />
    </label>
  );
}

export function Checkbox({ prop, label, change, value }) {
  return (
    <label className="checkbox">
      {label}
      <input
        className="checkbox"
        value={value}
        name={prop}
        type="checkbox"
        onChange={change} />
    </label>
  );
}

export function DateInput({ prop, label, change, value, RIEInput, disabled, propName }) {
  return (
    <label className="label">
      {label}
      <RIEInput
        isDisabled={disabled}
        type="text"
        value={value}
        change={change}
        propName={propName}
        className="input"
        value={value}
        name={prop}
        type="date"
        placeholder={label}
        onChange={change} />
    </label>
  );
}

export function Dropdown({ prop, label, options, change, value }) {
  return (
    <label className="label">
      {label}
      <select
        className="input"
        value={value}
        name={prop}
        onChange={change}>

        {options.map((text, index) => {
          return <option key={index} value={text}>{text}</option>;
        })}

      </select>
    </label>
  );
}

export function TextArea({ prop, label, change, value }) {
  return (
    <label className="label">
      {label}
      <textarea
        className="input"
        value={value}
        name={prop}
        rows="10"
        cols="50"
        onChange={change} />
    </label>
  );
}

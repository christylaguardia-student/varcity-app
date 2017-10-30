import React from 'react';

export function TextInput({ value, prop, label, change }) {
  return (
    <label className="label">
      {label}
      <input
        className="input"
        name={prop}
        type="text"
        placeholder={value}
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
        name={prop}
        type="text"
        placeholder={value}
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
        name={prop}
        type="number"
        placeholder={value}
        onChange={change} />
    </label>
  );
}

export function Checkbox({ value, prop, label, change }) {
  return (
    <label className="checkbox">
      <input
        className="checkbox"
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
        name={prop}
        type="date"
        placeholder={value}
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
        name={prop}
        placeholder={value}
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
        className="textarea"
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

export function ButtonWithIcon({ text, iconClass, onClickFn }) {
  return (
    <div>
      <p className="control" onClick={onClickFn}>
        <a className="button">
          <span className="icon is-small">
            <i className={iconClass}></i>
          </span>
          <span>{text}</span>
        </a>
      </p>
    </div>
  );
}

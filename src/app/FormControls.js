import React from 'react';
import { RIEInput, RIEToggle, RIETextArea, RIENumber, RIESelect } from 'riek';
import _ from 'lodash';

export function TextInput({ value, propName, label, placeholder=label, change }) {
  return (
    <label className="label">
      {label}
      <RIEInput
        value={value}
        change={change}
        propName={propName}
        placeholder={placeholder}
        className="input"
        validate={_.isString} />
    </label>
  );
}

export function TextArea({ value, propName, label, placeholder=label, change }) {
  return (
    <label className="label">
      {label}
      <RIETextArea
        value={value}
        change={change}
        propName={propName}
        placeholder={placeholder}
        rows={8}
        columns={50}
        className="textarea"
        validate={_.isString} />
    </label>
  );
}
  
export function NumberInput({ value, propName, label, placeholder=label, change }) {
  return (
    <label className="label">
      {label}
      <RIENumber
        value={value}
        change={change}
        propName={propName}
        placeholder={placeholder}
        className="input"
        validate={_.isNumber} />
    </label>
  );
}

export function DateInput({ value, propName, label, placeholder=label, change }) {
  return (
    <label className="label">
      {label}
      <RIEInput
        type="date"
        value={value}
        change={change}
        propName={propName}
        placeholder={placeholder}
        className="input"
        validate={_.isDate} />
    </label>
  );
}

export function Toggle({ value, propName, label, placeholder=label, change }) {
  return (
    <label className="label">
      {label}
      <RIEToggle
        value={value}
        change={change}
        propName={propName}
        textTrue="Yes"
        textFalse="No"
        placeholder={placeholder}
        className="input"
        validate={_.isString} />
    </label>
  );
}

export function TextSelect({ value, propName, label, options, change }) {
  return (
    <label className="label">
      {label}
      <RIESelect
        value={value}
        change={change}
        propName={propName}
        options={options}
        className="input"
        validate={_.isString} />
    </label>
  );
}

export function UrlInput({ value, propName, label, placeholder=label, change }) {
  return (
    <label className="label">
      {label}
      <RIEInput
        value={value}
        change={change}
        propName={propName}
        placeholder={placeholder}
        className="input"
        validate={_.isString} />
    </label>
  );
}

export function EmailInput({ value, propName, label, placeholder=label, change }) {
  return (
    <label className="label">
      {label}
      <RIEInput
        type="email"
        value={value}
        change={change}
        propName={propName}
        placeholder={placeholder}
        className="input has-icons-left"
        validate={_.isString} />
    </label>
  );
}

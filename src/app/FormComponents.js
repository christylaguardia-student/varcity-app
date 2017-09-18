import React from 'react';
import { RIEInput, RIEToggle, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';

// QUESTIONS: should this be a class?
// how does the change=httpCallback get passed in?
// how does the value=??? get passed in?

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
        validate={_.isString}/>
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
        validate={_.isNumber}/>
    </label>
  );
}

export function DateInput({ value, propName, label, placeholder=label, change }) {
  // const today = new Date('4/23/1997');
  return (
    <label className="label">
      {label}
      <RIEInput
        type="date"
        value={value}
        change={change}
        propName={propName}
        placeholder={new Date('4/23/1997')}
        className="input"
        validate={_.isDate}/>
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
        validate={_.isString}/>
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
        validate={_.isString}/>
    </label>
  );
}

export function UrlInput({ value, propName, label, placeholder=label, change }) {
  return (
    <label className="file-label">
      {label}
      <RIEInput
        type="file"
        value={value}
        change={change}
        propName={propName}
        placeholder={placeholder}
        className="file-input"
        validate={_.isString}/>
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
        validate={_.isString}/>
    </label>
  );
}

// TODO: password input
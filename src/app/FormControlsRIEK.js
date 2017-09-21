import React from 'react';
import { RIEInput, RIEToggle, RIETextArea, RIENumber, RIESelect } from 'riek';
import _ from 'lodash';

export function TextInput({ value, propName, label, change, disabled=true }) {
  return (
    <label className="label">
      {label}
      <RIEInput
        isDisabled={disabled}
        value={value || ''}
        change={change}
        propName={propName}
        className="input"
        validate={_.isString} />
    </label>
  );
}

export function TextArea({ value, propName, label, change, disabled=true }) {
  return (
    <label className="label">
      {label}
      <RIETextArea
        isDisabled={disabled}
        value={value || ''}
        change={change}
        propName={propName}
        rows={8}
        columns={50}
        className="textarea"
        validate={_.isString} />
    </label>
  );
}
  
export function NumberInput({ value, propName, label, change, disabled=true }) {
  return (
    <label className="label">
      {label}
      <RIENumber
        isDisabled={disabled}
        value={value || 0}
        change={change}
        propName={propName}
        className="input"
        validate={_.isNumber} />
    </label>
  );
}

export function DateInput({ value, propName, label, change, disabled=true }) {
  return (
    <label className="label">
      {label}
      <RIEInput
        isDisabled={disabled}
        type="text"
        value={value || ''}
        change={change}
        propName={propName}
        className="input"
        validate={_.isDate} />
    </label>
  );
}

export function Toggle({ value, propName, label, change, disabled=true }) {
  return (
    <label className="label">
      {label}
      <RIEToggle
        isDisabled={disabled}
        value={value || 'No'}
        change={change}
        propName={propName}
        textTrue="Yes"
        textFalse="No"
        className="input"
        validate={_.isString} />
    </label>
  );
}

export function ToggleEditMode({ value, propName, change, disabled=true }) {
  // TODO: need to work on this

  return (
    <div>
      <icon className="fa fa-check fa-lg" />
      <icon className="fa fa-pencil fa-lg" />
    </div>
  //   <RIEToggle
  //     isDisabled={disabled}
  //     value={value}
  //     change={change}
  //     propName={propName}
  //     textTrue={pencil}
  //     textFalse={check}
  //     className="select" />
  );
}

const fakeOptions = [{ id: -1, text:'' }];

export function TextSelect({ value, propName, label, options=fakeOptions, change, disabled=true }) {
  return (
    <label className="label">
      {label}
      <RIESelect
        isDisabled={disabled}
        value={value || ''}
        change={change}
        propName={propName}
        options={options}
        className="input"
        validate={_.isString} />
    </label>
  );
}

export function UrlInput({ value, propName, label, change, disabled=true }) {
  return (
    <label className="label">
      {label}
      <RIEInput
        isDisabled={disabled}
        value={value || ''}
        change={change}
        propName={propName}
        className="input"
        validate={_.isString} />
    </label>
  );
}

export function EmailInput({ value, propName, label, change, disabled=true }) {
  return (
    <label className="label">
      {label}
      <RIEInput
        isDisabled={disabled}
        type="email"
        value={value || ''}
        change={change}
        propName={propName}
        className="input has-icons-left"
        validate={_.isString} />
    </label>
  );
}
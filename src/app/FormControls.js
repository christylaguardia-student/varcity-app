import React from 'react';
import { RIEInput, RIEToggle, RIETextArea, RIENumber, RIESelect } from 'riek';
import _ from 'lodash';

const isDisabled = true;

function change() { console.log('pretending to make api call');}

export function TextInput({ prop, name, label }) {
  return (
    <label className="label">
      {label}
      <RIEInput
        isDisabled={isDisabled}
        value={prop}
        change={change}
        propName={name}
        className="input"
        validate={_.isString} />
    </label>
  );
}

export function TextArea({ prop, name, label }) {
  return (
    <label className="label">
      {label}
      <RIETextArea
        isDisabled={isDisabled}
        value={prop}
        change={change}
        propName={name}
        rows={8}
        columns={50}
        className="textarea"
        validate={_.isString} />
    </label>
  );
}
  
export function NumberInput({ prop, name, label }) {
  return (
    <label className="label">
      {label}
      <RIENumber
        isDisabled={isDisabled}
        value={prop}
        change={change}
        propName={name}
        className="input"
        validate={_.isNumber} />
    </label>
  );
}

export function DateInput({ prop, name, label }) {
  return (
    <label className="label">
      {label}
      <RIEInput
        isDisabled={isDisabled}
        type="date"
        value={prop}
        change={change}
        propName={name}
        className="input"
        validate={_.isDate} />
    </label>
  );
}

export function Toggle({ prop, name, label }) {
  return (
    <label className="label">
      {label}
      <RIEToggle
        isDisabled={isDisabled}
        value={prop}
        change={change}
        propName={name}
        textTrue="Yes"
        textFalse="No"
        className="input"
        validate={_.isString} />
    </label>
  );
}

export function ToggleEditMode({ prop, name }) {
  // TODO: need to work on this

  return (
    <div>
      <icon className="fa fa-check fa-lg" />
      <icon className="fa fa-pencil fa-lg" />
    </div>
  //   <RIEToggle
  //     isDisabled={isDisabled}
  //     value={prop}
  //     change={change}
  //     propName={name}
  //     textTrue={pencil}
  //     textFalse={check}
  //     className="select" />
  );
}

export function TextSelect({ prop, name, label, options }) {
  return (
    <label className="label">
      {label}
      <RIESelect
        isDisabled={isDisabled}
        value={prop}
        change={change}
        propName={name}
        options={options}
        className="input"
        validate={_.isString} />
    </label>
  );
}

export function UrlInput({ prop, name, label }) {
  return (
    <label className="label">
      {label}
      <RIEInput
        isDisabled={isDisabled}
        value={prop}
        change={change}
        propName={name}
        className="input"
        validate={_.isString} />
    </label>
  );
}

export function EmailInput({ prop, name, label }) {
  return (
    <label className="label">
      {label}
      <RIEInput
        isDisabled={isDisabled}
        type="email"
        value={prop}
        change={change}
        propName={name}
        className="input has-icons-left"
        validate={_.isString} />
    </label>
  );
}

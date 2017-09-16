import React from 'react';
import ReactDOM from 'react-dom';
import { getStates, getCities } from './geodata';
import countries from './countries';

describe('geodata api service', () => {
  
  describe('states', () => {
    it('returns states for a country', () => {
      return getStates('Japan')
        .then(states => expect(states.length).toBeGreaterThan(0));
    });
    
      it('returns empty array when no states are found', () => {
        return getStates('bad country name')
          .then(states => expect(states.length).toEqual(0));
      });
    
  });

  describe('cities', () => {
    it('returns a list of all cites for a state', () => {
      return getCities('Japan', 'Miyagi')
        .then(cities => expect(cities.length).toBeGreaterThan(0));
    });
  
    it('returns empty array when no cites are found are found', () => {
      return getCities('Japan', 'bad state or region name')
        .then(cities => expect(cities.length).toEqual(0));
    });
  });
  
});
import React from 'react';
import ReactDOM from 'react-dom';
import { getCountries, getStates, getCities } from './geodata';

describe('geodata api service', () => {

  describe('countries', () => {
    it('returns all countries', () => {
      return getCountries()
        .then(countries => expect(countries.length).toBeGreaterThan(0));
    });
  });
  
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
    it('returns all cites for a state', () => {
      return getCities('Japan', 'Miyagi')
        .then(cities => expect(cities.length).toBeGreaterThan(0));
    });
  
    it('returns empty array when no cites are found', () => {
      return getCities('Japan', 'bad state or region name')
        .then(cities => expect(cities.length).toEqual(0));
    });
  });
  
});
import React from 'react';
import {validate10DigitIsbn, validate13DigitIsbn} from '../util/isbn';

test('10 digit ISBN number', () => {
  expect(validate10DigitIsbn('1234')).toBe(false);
  expect(validate10DigitIsbn('0198526636')).toBe(true);
  expect(validate10DigitIsbn(null)).toBe(false);
  expect(validate10DigitIsbn('0-19-852663-6')).toBe(true);
});

test('13 digit ISBN number', () => {
  expect(validate13DigitIsbn('1234')).toBe(false);
  expect(validate13DigitIsbn('9781861978769')).toBe(true);
  expect(validate13DigitIsbn(null)).toBe(false);
  expect(validate13DigitIsbn('978-1-86197-876-9')).toBe(true);
});

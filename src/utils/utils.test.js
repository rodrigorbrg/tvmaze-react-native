import React from 'react';

import { formatDate, formatYearDate, formatPeriodDate } from './date';
import http from './http';

jest.mock('./http');

afterEach(() => jest.clearAllMocks());

test('test format year date', () => {
  const date = formatYearDate('2021-11-08');
  expect(date).toEqual('2021');
  expect.assertions(1);
});

test('test empty date to year date', () => {
  const date = formatYearDate('');
  expect(date).toEqual('?');
  expect.assertions(1);
});

test('test null date to year date', () => {
  const date = formatYearDate(null);
  expect(date).toEqual('?');
  expect.assertions(1);
});

test('test Invalid Date to year date', () => {
  const date = formatYearDate('Invalid Date');
  expect(date).toEqual('?');
  expect.assertions(1);
});

test('test format period date', () => {
  const date = formatPeriodDate('2020-11-08', '2021-11-08');
  expect(date).toEqual('2020 - 2021');
  expect.assertions(1);
});

test('test invalid end date period', () => {
  const date = formatPeriodDate('2020-11-08', '');
  expect(date).toEqual('2020 - ?');
  expect.assertions(1);
});

test('test invalid start date period', () => {
  const date = formatPeriodDate('Invalid Date', '2021-11-08');
  expect(date).toEqual('? - 2021');
  expect.assertions(1);
});

test('test format date', () => {
  const date = formatDate('2021-11-08');
  expect(date).toEqual('11/08/2021');
  expect.assertions(1);
});

test('test invalid format date', () => {
  const date = formatDate(null);
  expect(date).toEqual('?');
  expect.assertions(1);
});

test('test successful http request', async () => {
  http.coreGet.mockResolvedValue([null, {}]);

  const response = await http.coreGet('path');

  expect(response).toEqual([null, {}]);
  expect.assertions(1);
});

test('test error http request', async () => {
  http.coreGet.mockResolvedValue([{}, null]);

  const response = await http.coreGet('path');

  expect(response).toEqual([{}, null]);
  expect.assertions(1);
});

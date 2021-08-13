import React from 'react';
import { ThingsProvider } from '../src/Components/Context/Context';
export const parameters = {
  actions: { argTypesRegex:"^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}




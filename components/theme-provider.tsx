'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import * as React from 'react';

type ThemeProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

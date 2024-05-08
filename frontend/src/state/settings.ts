import { atom } from 'recoil';

type ThemeVariant = 'dark' | 'light' | 'system';

const defaultTheme = 'light';

const preferredTheme = localStorage.getItem(
  'themeVariant'
) as ThemeVariant | null;

let theme: ThemeVariant = preferredTheme ? preferredTheme : defaultTheme;

if (theme === 'system') {
  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const defaultSettingsState = {
  open: false,
  defaultCollapseContent: true,
  expandAll: false,
  hideCot: false,
  isChatHistoryOpen: true,
  language: 'en-US',
  theme: theme
};

export const settingsState = atom<{
  open: boolean;
  defaultCollapseContent: boolean;
  expandAll: boolean;
  hideCot: boolean;
  theme: ThemeVariant;
  isChatHistoryOpen: boolean;
  language: string;
}>({
  key: 'AppSettings',
  default: defaultSettingsState
});

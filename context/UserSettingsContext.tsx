'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type UserSettings = {
  theme: 'light' | 'dark';
  language: 'fa' | 'en';
};

const defaultSettings: UserSettings = {
  theme: 'light',
  language: 'fa',
};

const UserSettingsContext = createContext<{
  settings: UserSettings;
  setSettings: (settings: UserSettings) => void;
}>({
  settings: defaultSettings,
  setSettings: () => {},
});

export const useUserSettings = () => useContext(UserSettingsContext);

export const UserSettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettingsState] = useState<UserSettings>(defaultSettings);

  useEffect(() => {
    const saved = localStorage.getItem('userSettings');
    if (saved) {
      setSettingsState(JSON.parse(saved));
    }
  }, []);

  const setSettings = (newSettings: UserSettings) => {
    setSettingsState(newSettings);
    localStorage.setItem('userSettings', JSON.stringify(newSettings));
  };

  return (
    <UserSettingsContext.Provider value={{ settings, setSettings }}>
      <html lang={settings.language} dir={settings.language === 'fa' ? 'rtl' : 'ltr'}>
        <body className={`${settings.theme === 'dark' ? 'dark' : ''}`}>
          {children}
        </body>
      </html>
    </UserSettingsContext.Provider>
  );
};

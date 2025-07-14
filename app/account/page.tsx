'use client';

import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useUserSettings } from '@/context/UserSettingsContext';
import ProfileSettings from '@/Components/settings/ProfileSettings';
import SecuritySettings from '@/Components/settings/SecuritySettings';
import NotificationSettings from '@/Components/settings/NotificationSettings';

interface FormState {
  name: string;
  email: string;
  password: string;
  language: 'fa' | 'en';
  timezone: string;
  theme: 'light' | 'dark';
  twoFactor: boolean;
  notifyEmail: boolean;
  notifySMS: boolean;
}

export default function AccountPage() {
  const { settings, setSettings } = useUserSettings();

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    password: '',
    language: settings.language,
    timezone: 'Asia/Tehran',
    theme: settings.theme,
    twoFactor: false,
    notifyEmail: true,
    notifySMS: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem('userSettings');
    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isChecked = (e.target as HTMLInputElement).checked;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? isChecked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    localStorage.setItem('userSettings', JSON.stringify(form));
    setSettings({
      theme: form.theme,
      language: form.language,
    });

    toast.success('✅ تنظیمات با موفقیت ذخیره شد');
  };

  const handleDelete = () => {
    toast.error('⚠️ حساب شما حذف شد');
  };

  const clearCache = () => {
    toast.info('♻️ تنظیمات کش پاک شد');
    localStorage.removeItem('userSettings');
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6 rounded shadow mt-6 space-y-6"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">تنظیمات حساب کاربری</h2>

        <ProfileSettings form={form} handleChange={handleChange} />
        <SecuritySettings form={form} handleChange={handleChange} handleDelete={handleDelete} />
        <NotificationSettings form={form} handleChange={handleChange} clearCache={clearCache} />

        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            ذخیره تغییرات
          </button>
        </div>
      </form>
    </div>
  );
}

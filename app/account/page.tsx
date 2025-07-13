'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

export default function AccountPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    language: 'fa',
    theme: 'light',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('✅ تنظیمات با موفقیت ذخیره شد');
    // Example: save to localStorage or send to backend here
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6 rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">تنظیمات حساب کاربری</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block text-right font-medium">نام کامل</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1 text-right"
            placeholder="مثلاً علی رضی"
          />
        </div>

        <div>
          <label className="block text-right font-medium">ایمیل</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1 text-right"
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label className="block text-right font-medium">رمز عبور جدید</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1 text-right"
          />
        </div>

        <div>
          <label className="block text-right font-medium">زبان</label>
          <select
            name="language"
            value={form.language}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1 text-right"
          >
            <option value="fa">فارسی</option>
            <option value="en">English</option>
          </select>
        </div>

        <div>
          <label className="block text-right font-medium">حالت نمایش</label>
          <select
            name="theme"
            value={form.theme}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1 text-right"
          >
            <option value="light">روشن</option>
            <option value="dark">تاریک</option>
          </select>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            ذخیره تغییرات
          </button>
          <button
            type="button"
            onClick={() => toast.error('⚠️ حساب شما حذف شد')}
            className="text-red-600 underline"
          >
            حذف حساب
          </button>
        </div>
      </form>
    </div>
  );
}

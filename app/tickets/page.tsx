'use client';

import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

export default function SubmitTicketPage() {
  const fileRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
  });

  const [fileName, setFileName] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('✅ تیکت با موفقیت ثبت شد');

    console.log('Form data:', formData);
    if (fileRef.current?.files?.[0]) {
      console.log('Attached file:', fileRef.current.files[0].name);
    }

    // Reset form
    setFormData({ title: '', category: '', description: '' });
    setFileName('');
    if (fileRef.current) fileRef.current.value = '';
  };

  return (
    <div className="bg-white p-6 rounded shadow space-y-6">
      <h2 className="text-xl font-semibold mb-4">ارسال تیکت پشتیبانی</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">عنوان تیکت</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 w-full p-2 border rounded"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">دسته‌بندی مشکل</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="mt-1 w-full p-2 border rounded"
          >
            <option value="">انتخاب کنید</option>
            <option value="software">نرم‌افزاری</option>
            <option value="hardware">سخت‌افزاری</option>
            <option value="network">شبکه</option>
            <option value="account">حساب کاربری</option>
            <option value="other">سایر</option>
          </select>
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">شرح کامل مشکل</label>
          <textarea
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
            placeholder="توضیحات..."
          />
        </div>

        {/* File Upload */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">فایل ضمیمه (اختیاری)</label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="px-4 py-2 bg-gray-100 border rounded hover:bg-gray-200 text-sm"
            >
              📎 انتخاب فایل
            </button>
            {fileName && (
              <span className="text-sm text-gray-700 truncate">{fileName}</span>
            )}
          </div>
          <input
            ref={fileRef}
            type="file"
            accept=".jpg,.png,.pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 text-left">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            ارسال تیکت
          </button>
        </div>
      </form>
    </div>
  );
}

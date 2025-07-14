'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import NetworkFormFields from '@/app/tickets/NetworkFormFields';
import HardwareFormFields from '@/app/tickets/HardwareFormFields';
import SoftwareFormFields from '@/app/tickets/SoftwareFormFields';
import OtherFormFields from '@/app/tickets/OtherFormFields';

export default function SubmitTicketPage() {
  const [category, setCategory] = useState('');
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleBaseChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('✅ تیکت با موفقیت ثبت شد');
    console.log('Form Data:', formData);
  };

  return (
    <div className="bg-white p-6 rounded shadow space-y-6">
      <h2 className="text-xl font-semibold mb-4">ارسال تیکت پشتیبانی</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">عنوان تیکت</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleBaseChange}
            className="mt-1 w-full p-2 border rounded"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">نوع مشکل</label>
          <select
            name="category"
            value={category}
            onChange={handleCategoryChange}
            className="mt-1 w-full p-2 border rounded"
            required
          >
            <option value="">انتخاب کنید</option>
            <option value="network">شبکه</option>
            <option value="hardware">سخت‌افزاری</option>
            <option value="software">نرم‌افزاری</option>
            <option value="other">سایر</option>
          </select>
        </div>

        {/* Category-specific fields */}
        {category === 'network' && <NetworkFormFields />}
        {category === 'hardware' && <HardwareFormFields />}
        {category === 'software' && <SoftwareFormFields />}
        {category === 'other' && <OtherFormFields />}

        <button
          type="submit"
          className="bg-violet-600 text-white px-6 py-2 rounded hover:bg-violet-700 text-sm"
        >
          ارسال تیکت
        </button>
      </form>
    </div>
  );
}

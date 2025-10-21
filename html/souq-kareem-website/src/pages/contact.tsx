import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-white">تواصل معنا</h1>
      <p className="mt-4 text-gray-400">
        إذا كان لديك أي استفسارات أو تحتاج إلى مساعدة، لا تتردد في التواصل معنا عبر النموذج أدناه.
      </p>
      <form className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-300" htmlFor="name">الاسم</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="أدخل اسمك"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300" htmlFor="email">البريد الإلكتروني</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="أدخل بريدك الإلكتروني"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300" htmlFor="message">الرسالة</label>
          <textarea
            id="message"
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="اكتب رسالتك هنا"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded"
        >
          إرسال
        </button>
      </form>
    </div>
  );
};

export default Contact;
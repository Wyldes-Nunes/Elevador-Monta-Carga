import React from 'react';
import { useRouter } from 'next/navigation';

type FormProps = {
  onSubmit: (data: any) => void;
  initialData?: any;
  children: React.ReactNode;
  submitLabel?: string;
  cancelLabel?: string;
  onCancel?: () => void;
};

export default function Form({ 
  onSubmit, 
  initialData = {}, 
  children, 
  submitLabel = "Salvar",
  cancelLabel = "Cancelar",
  onCancel
}: FormProps) {
  const router = useRouter();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data: Record<string, any> = {};
    
    formData.forEach((value, key) => {
      data[key] = value;
    });
    
    onSubmit(data);
  };
  
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      router.back();
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {children}
      
      <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {cancelLabel}
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

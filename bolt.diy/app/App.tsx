import React from 'react';
import { Outlet } from '@remix-run/react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

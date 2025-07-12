'use client';

import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('fake-user');
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser({ email: parsed.email });
      setRole(parsed.role);
    }
    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem('fake-user');
    setUser(null);
    setRole('');
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ user, role, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

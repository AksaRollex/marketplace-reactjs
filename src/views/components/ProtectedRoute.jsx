import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ProtectedRoute = () => {
  const { user, isLoading } = useAuth();
  const token = localStorage.getItem("token");

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
          <p className="text-gray-500 font-medium">Memuat akses...</p>
        </div>
      </div>
    );
  }

  // Debugging user object (Check Console for output)
  console.log("Current User:", user);

  // Jika tidak ada token atau user tidak ditemukan, redirect ke login
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // Cek role admin dengan berbagai kemungkinan struktur response
  // 1. user.role_id (Direct)
  // 2. user.data.role_id (Wrapped in data)
  // 3. user.user.role_id (Wrapped in user)
  const roleId =
    user.role_id ||
    user.role ||
    user?.data?.role_id ||
    user?.data?.role ||
    user?.user?.role_id ||
    user?.user?.role;

  console.log("Detected Role ID:", roleId);

  const isAdmin = roleId === "admin" || roleId === 1 || roleId === "Admin";

  if (!isAdmin) {
    console.warn("Access Denied: User is not admin", user);
    // TAMPILKAN DEBUG INFO DI LAYAR AGAR USER BISA LIHAT
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full text-center space-y-4">
          <h1 className="text-3xl font-bold text-red-600">Access Denied</h1>
          <p className="text-gray-600">
            Anda tidak memiliki izin untuk mengakses halaman ini.
          </p>

          <div className="bg-gray-900 text-left p-4 rounded-lg overflow-auto max-h-60 text-xs text-green-400 font-mono">
            <p className="text-gray-400 mb-2">
              // Debug Info (Structure Check)
            </p>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>

          <div className="text-left text-sm text-gray-700 border-t pt-4">
            <p>
              <strong>Detected Role:</strong> {String(roleId)}
            </p>
            <p>
              <strong>Expected:</strong> 'admin'
            </p>
          </div>

          <button
            onClick={() => (window.location.href = "/")}
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  // Jika semua cek lolos, tampilkan konten admin
  return <Outlet />;
};

export default ProtectedRoute;

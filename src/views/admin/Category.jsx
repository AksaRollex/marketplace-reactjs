import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import Search from "../components/Search";
import Paginate from "../components/Paginate";
import { Plus, Edit3, Trash2 } from "lucide-react";
import api from "../../libs/axios";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  const [dataCategory, setDataCategory] = useState([]);

  const fetchDataCategory = async () => {
    try {
      const response = await api.get(`/categories/data`);
      console.log("Data category response:", response.data);
      setDataCategory(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDataCategory();
  }, [page, search]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      // await api.delete(`/products/${id}`);
      setDataCategory(dataCategory.filter((item) => item.id !== id));
      // toast.success('Item deleted successfully');
    }
  };

  const headers = ["ID", "Name", "Slugs", "Actions"];

  const renderRow = (item, index) => (
    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        #{item.id}
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{item.name}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{item.slug}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="flex gap-2">
          <button className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 p-2 rounded-lg transition-colors">
            <Edit3 size={16} />
          </button>
          <button
            onClick={() => handleDelete(item.id)}
            className="text-red-600 hover:text-red-900 bg-red-50 p-2 rounded-lg transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="flex min-h-screen bg-gray-50 w-full font-sans">
      <Sidebar />

      <main className="flex-1 p-4 md:p-8 md:ml-64 transition-all duration-300">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Data Categories Overview
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Manage your categories
              </p>
            </div>
            <button
              onClick={() => navigate("/dashboard/products/add")}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-lg shadow-indigo-200"
            >
              <Plus size={20} />
              Add Category
            </button>
          </div>

          {/* Controls Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Search onSearch={setSearch} placeholder="Search products..." />
            <div className="flex gap-2">
              {/* Additional filters can go here */}
            </div>
          </div>

          {/* Table Section */}
          <Table
            headers={headers}
            data={dataCategory}
            renderRow={renderRow}
            loading={loading}
          />

          {/* Pagination */}
          <Paginate
            currentPage={page}
            lastPage={totalPages}
            onPageChange={setPage}
          />
        </div>
      </main>
    </div>
  );
}

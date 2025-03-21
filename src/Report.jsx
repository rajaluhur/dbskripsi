import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebaseConfig";
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx";
import "bootstrap/dist/css/bootstrap.min.css";

const Report = () => {
  const [users, setUsers] = useState([]);
  const [filterText, setFilterText] = useState("");

  // Mengambil data dari Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(firestore, "users"));
      const usersData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  // Konfigurasi kolom tabel
  const columns = [
    { name: "Nama Lengkap", selector: row => row.fullName, sortable: true },
    { name: "Email", selector: row => row.email, sortable: true },
    { name: "Sekolah", selector: row => row.school, sortable: true },
    { 
      name: "Nilai Latihan Soal", 
      selector: row => Math.round((row.exercise / 30) * 100), // Mengalikan nilai exercise dengan 5
      sortable: true 
    },
  ];
  

  // Filter data berdasarkan input pencarian
  const filteredData = users.filter(user =>
    Object.values(user).some(value => value?.toString().toLowerCase().includes(filterText.toLowerCase()))
  );

  // Fungsi untuk export ke Excel
// Fungsi untuk export ke Excel dengan data yang sama seperti tabel
const exportToExcel = (filteredOnly = false) => {
    const dataToExport = (filteredOnly ? filteredData : users).map(user => ({
      "Nama Lengkap": user.fullName,
      "Email": user.email,
      "Sekolah": user.school,
      "Latihan Soal": Math.round((user.exercise/30)*100), // Pastikan nilai dikali 5
    }));
  
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "user_report.xlsx");
  };
  

  return (
    <div className="container mt-4">
      <h2 className="mb-3">User Report</h2>
      
      {/* Input Pencarian */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Cari user..."
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
      />

      {/* Tabel Data */}
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
      />

      {/* Tombol Export */}
      <div className="mt-3">
        <button className="btn btn-primary me-2" onClick={() => exportToExcel(false)}>Download Semua Data</button>
      </div>
    </div>
  );
};

export default Report;

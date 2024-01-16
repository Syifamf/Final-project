import React from 'react';
import Table from 'react-bootstrap/Table';
const Tabel = ({bukus, editData, hapusData}) => {
  return (
        <Table striped bordered hover bgcolor='white' >
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Peminjam</th>
              <th>Nama Buku</th>
              <th>Tanggal Keluar</th>
              <th>Tanggal Masuk</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
          {bukus.map((buku, index) => {
            return(
              <tr class="table table-success " key={index}>
                <td>{index + 1}</td>
                <td>{buku.peminjam}</td>
                <td>{buku.buku}</td>
                <td>{buku.tglkeluar}</td>
                <td>{buku.tglmasuk}</td>
                <td>
                <button  className="btn btn-dark mr-1 " onClick={() => editData(buku.id) }>Edit</button>
                <button  className="btn btn-danger mr-1" onClick={() => hapusData(buku.id) }>Hapus</button>
                </td>
              </tr>
            );
           })
          }
            
          </tbody>
        </Table>
   );
}

export default Tabel;
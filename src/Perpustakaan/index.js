import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent'
import Tabel from './Tabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulir from './Formulir';

export default class Perpustakaan extends Component {

    constructor(props) {
        super(props)

        this.state = {
            bukus : [],
            nama : "",
            author : "",
            deskripsi : "",
            harga : "",
            id : "",

        };
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.id === "") {
            this.setState({
            bukus: [
                ...this.state.bukus,
                {
                id: this.state.bukus.length + 1,
                nama: this.state.nama,
                author: this.state.author,
                deskripsi: this.state.deskripsi,
                harga: this.state.harga
                },
            ],
        });

    } else {
        const bukuTidakDipilih = this.state.bukus
        .filter((buku) => buku.id !== this.state.id)
        .map ((filterBuku) => {
            return filterBuku;
        });

        this.setState({
        bukus: [
            ...bukuTidakDipilih,
            {
                id:this.state.bukus.length + 1,
                nama:this.state.nama,
                author:this.state.author,
                deskripsi:this.state.deskripsi,
                harga:this.state.harga,

            },
        ],
        });
    }

        this.setState({
            nama : "",
            author : "",
            deskripsi : "",
            harga : "0",
            id : "",
        })
    };

    editData = (id) => {
        console.log("id buku", id);
        const bukuTerpilih  = this.state.bukus
        .filter((buku) => buku.id === id)
        .map((filterBuku) => {
            return filterBuku;
        });

        this.setState({
            nama : bukuTerpilih[0].nama,
            author : bukuTerpilih[0].author,
            deskripsi : bukuTerpilih[0].deskripsi,
            harga : bukuTerpilih[0].harga,
            id : bukuTerpilih[0].id,
        });
     
    };

    hapusData = (id) => {
        const bukuBaru = this.state.bukus
        .filter((buku) => buku.id !== id)
        .map((filterBuku) => {
            return filterBuku
        })

        this.setState({
           bukus : bukuBaru
        })
    }

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className='container mt-4'>
            <Tabel bukus={this.state.bukus} editData={this.editData} hapusData={this.hapusData} />
            <Formulir {...this.state} 
            handleChange={this.handleChange}  
            handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

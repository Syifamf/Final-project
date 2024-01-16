import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent'
import Tabel from './Tabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulir from './Formulir';

export default class Peminjaman extends Component {

    constructor(props) {
        super(props)

        this.state = {
            bukus : [],
            peminjam : "",
            buku : "",
            tglkeluar : "",
            tglmasuk : "",
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
                peminjam: this.state.peminjam,
                buku: this.state.buku,
                tglkeluar: this.state.tglkeluar,
                tglmasuk: this.state.tglmasuk
                },
            ],
        });

    } else {
        const bukuTidakDipinjam = this.state.bukus
        .filter((buku) => buku.id !== this.state.id)
        .map ((filterBuku) => {
            return filterBuku;
        });

        this.setState({
        bukus: [
            ...bukuTidakDipinjam,
            {
                id:this.state.bukus.length + 1,
                peminjam:this.state.peminjam,
                buku:this.state.buku,
                tglkeluar:this.state.tglkeluar,
                tglmasuk:this.state.tglmasuk
            },
        ],
        });
    }

        this.setState({
            peminjam : "",
            buku : "",
            tglkeluar : "",
            tglmasuk : "",
            id : "",
        })
    };

    editData = (id) => {
        console.log("id buku", id);
        const bukuDipinjam  = this.state.bukus
        .filter((buku) => buku.id === id)
        .map((filterBuku) => {
            return filterBuku;
        });

        this.setState({
            peminjam : bukuDipinjam[0].peminjam,
            buku : bukuDipinjam[0].buku,
            tglkeluar : bukuDipinjam[0].tglkeluar,
            tglmasuk : bukuDipinjam[0].tglmasuk,
            id : bukuDipinjam[0].id,
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

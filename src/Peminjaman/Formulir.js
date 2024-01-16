import { Col, Row, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import 'react-datepicker/dist/react-datepicker.css';



const Formulir = ({peminjam, buku, tglmasuk, tglkeluar, handleChange, handleSubmit, id, startDate, setStartDate}) => {

  return (
<div className='mt-5'>
    <Row>
        <Col>
            <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
            <hr/>
        </Col>
    </Row> 
    <Row>
        <Col>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="peminjam">
                <Form.Label>Nama peminjam</Form.Label>
                <Form.Control 
                type="text" 
                name="peminjam" 
                value={peminjam} 
                onChange={(event) => {handleChange(event)}} />
            </Form.Group>

            <Form.Group className="mb-3" controlId='buku'>
                <Form.Label>Nama Buku</Form.Label>
                <Form.Control
                type="text"
                name="buku"
                value={buku}
                onChange={(event) => {handleChange(event)}}/>
            </Form.Group>
                <Form.Group className="mb-3" controlId="tglkeluar">
                <Form.Label>Tanggal Keluar</Form.Label>
                <Form.Control 
                type ="number" 
                name="tglkeluar" 
                value={tglkeluar} 
                onChange={(event) => {handleChange(event)}} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tglmasuk">
                <Form.Label>Tanggal Masuk</Form.Label>
                <Form.Control 
                type="number" 
                name="tglmasuk" 
                value={tglmasuk} 
                onChange={(event) => {handleChange(event)}} />
            </Form.Group>
            <Button variant="success" type="submit">
                Submit
            </Button>
            </Form>
         </Col>
    </Row>
</div>
  )
}

export default Formulir
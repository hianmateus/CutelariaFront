
import { useEffect, useState } from "react"
import { General, ProductImage, EditButton, InputProducts } from "./styles"
import { api } from '../../../services/api'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CheckCircle, Pencil, XCircle } from "@phosphor-icons/react";

import { formatPrice } from '../../../utils/formartPrice'
import { useNavigate } from "react-router-dom";

export function Products() {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products')



      setProducts(data)
    }

    loadProducts()
  }, [])

  function isOffer(offer) {
    if (offer) {
      return <CheckCircle color="green" size="25" />
    } else {
      return <XCircle color="red" size="25" />
    }
  }

  function editProduct(product) {
    navigate('/admin/editar-Produto', { state: { product } })

  }

  // Função para atualizar o estado da pesquisa
  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  // Filtrar os produtos com base no searchTerm
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <General>
      <InputProducts
        type="text"
        placeholder="Encontre um Produto"
        value={searchTerm}
        onChange={handleSearch} // Chama a função ao digitar
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="center">Estoque</TableCell>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Produto em Oferta</TableCell>
              <TableCell align="center">Categoria</TableCell>
              <TableCell align="center">Imagem do Produto</TableCell>
              <TableCell align="center">Editar Produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell align="center">{product.stock}</TableCell>
                <TableCell align="center">{formatPrice(product.price)}</TableCell>
                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                <TableCell component="th" scope="row" align="center">
                  {product.type}
                </TableCell>
                <TableCell align="center"><ProductImage src={product.url} /></TableCell>
                <TableCell align="center"> <EditButton onClick={() => editProduct(product)}> <Pencil style={{ display: 'flex' }} /> </EditButton> </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </General>
  )
}
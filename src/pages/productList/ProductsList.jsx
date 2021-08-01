import "./productsList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../DummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Products() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Products",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productsListProducts">
            <img
              className="productsListProductsImg"
              src={params.row.img}
              alt=""
            />
            {params.row.name}
          </div>
        );
      },
      editable: true,
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: "150",
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productsListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productsListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="products">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

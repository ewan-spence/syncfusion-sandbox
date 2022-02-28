import { Container } from "react-bootstrap";
import BasicGrid from "../Components/Grids/BasicGrid";
import Title from "../Components/Title";
import { basicGridData } from "../data";

export default function BasicGridPage({ ...props }) {
  var columnFields = ["OrderID", "CustomerID", "EmployeeID", "Freight", "ShipCountry"]

  return <Container>
    <Title>Basic Grid</Title>
    A Basic Syncfusion Grid
    <br /><br />
    <BasicGrid data={basicGridData} columnFields={columnFields} />
  </Container>
}
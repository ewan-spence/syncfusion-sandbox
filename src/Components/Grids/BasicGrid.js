import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Resize, Sort } from '@syncfusion/ej2-react-grids';

export default function BasicGrid({ data, columnFields, ...props }) {


  return <GridComponent dataSource={data} allowResizing>
    <ColumnsDirective>
      {columnFields.map(field => <ColumnDirective field={field} />)}
    </ColumnsDirective>
    <Inject services={[Filter, Group, Page, Resize, Sort]} />
  </GridComponent>
}
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';

export default function BasicGrid({ data, columnFields, ...props }) {


  return <GridComponent dataSource={data}>
    <ColumnsDirective>
      {columnFields.map(field => <ColumnDirective field={field} />)}
    </ColumnsDirective>
    <Inject services={[Page, Sort, Filter, Group]} />
  </GridComponent>
}
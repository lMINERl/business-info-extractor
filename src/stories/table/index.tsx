import React, { forwardRef } from 'react';
import MaterialTable, { Column } from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props: any, ref: any) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props: any, ref: any) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props: any, ref: any) => (<Clear {...props} ref={ref} />) as any),
  Delete: forwardRef((props: any, ref: any) => (<DeleteOutline {...props} ref={ref} />) as any),
  DetailPanel: forwardRef((props: any, ref: any) => (<ChevronRight {...props} ref={ref} />) as any),
  Edit: forwardRef((props: any, ref: any) => (<Edit {...props} ref={ref} />) as any),
  Export: forwardRef((props: any, ref: any) => (<SaveAlt {...props} ref={ref} />) as any),
  Filter: forwardRef((props: any, ref: any) => (<FilterList {...props} ref={ref} />) as any),
  FirstPage: forwardRef((props: any, ref: any) => (<FirstPage {...props} ref={ref} />) as any),
  LastPage: forwardRef((props: any, ref: any) => (<LastPage {...props} ref={ref} />) as any),
  NextPage: forwardRef((props: any, ref: any) => (<ChevronRight {...props} ref={ref} />) as any),
  PreviousPage: forwardRef((props: any, ref: any) => (<ChevronLeft {...props} ref={ref} />) as any),
  ResetSearch: forwardRef((props: any, ref: any) => (<Clear {...props} ref={ref} />) as any),
  Search: forwardRef((props: any, ref: any) => (<Search {...props} ref={ref} />) as any),
  SortArrow: forwardRef((props: any, ref: any) => (<ArrowDownward {...props} ref={ref} />) as any),
  ThirdStateCheck: forwardRef((props: any, ref: any) => (<Remove {...props} ref={ref} />) as any),
  ViewColumn: forwardRef((props: any, ref: any) => (<ViewColumn {...props} ref={ref} />) as any)
};

export const TableDefault = (props: {
  columns: Column<any>[];
  data: { [key: string]: any }[];
  content?: {
    title?: string;
  };
  actions?: {
    onRowAdd?: (newData: any) => Promise<any>;
    onRowUpdate?: (newData: any, oldData: any) => Promise<any>;
    onRowDelete?: (oldData: any) => Promise<any>;
  };
  options?: {};
}) => {
  const content = props.content ?? { title: '' };
  const actions = props.actions ?? {};
  const table = React.useMemo(() => {
    return (
      <MaterialTable
        icons={tableIcons as any}
        title={content.title}
        columns={props.columns}
        data={props.data}
        style={{
          fontFamily: 'roboto'
        }}
        options={{
          addRowPosition: 'first',
          actionsColumnIndex: -1
        }}
        editable={{
          ...actions
        }}
      />
    );
  }, [props.columns, props.data, actions, content]);

  return <React.Fragment>{table}</React.Fragment>;
};

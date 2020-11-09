import { Table } from 'antd';
import React, { useState } from 'react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
];

const data = [];
for (let i = 0; i < 24; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  });
}

const WithCustomSelection = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const onSelectChange = selectedRowKeys => setSelectedRows(selectedRowKeys);

  const rowSelection = {
    selectedRows,
    onChange: onSelectChange,
    hideDefaultSelections: true,
    selections: [
      {
        key: 'all-data',
        text: 'Select All  Data',
        onSelect: () => {
          setSelectedRows([...Array(24).keys()]);
        }
      },
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => index % 2 === 0);
          setSelectedRows(newSelectedRowKeys);
        }
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => index % 2 !== 0);
          setSelectedRows(newSelectedRowKeys);
        }
      }
    ]
  };

  return (
    <Table
      pagination={{ pageSize: 5 }}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
    />
  );
};

export default WithCustomSelection;

import React, { useRef, useState } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';

const tableDataSource: any = [
  {
    key: '0',
    name: 'Edward King 0',
    age: '32',
    address: 'London, Park Lane no. 0'
  },
  {
    key: '1',
    name: 'Edward King 1',
    age: '32',
    address: 'London, Park Lane no. 1'
  }
];

const EditableContext = React.createContext(null);

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

const EditableCell: React.FC<any> = props => {
  const [editing, setEditing] = useState<boolean>(false);
  const input = useRef<Input>(null);

  const {
    editable,
    dataIndex,
    form,
    title,
    record,
    index,
    handleSave,
    children,
    ...restProps
  } = props;

  const toggleEdit = () => {
    if (editing) {
      input.current.focus();
    }

    setEditing(!editing);
  };

  const renderCell = form => {

    const save = e => {
      form.validateFields((error, values) => {
        if (error && error[e.currentTarget.id]) {
          return;
        }
        toggleEdit();
        handleSave({ ...record, ...values });
      });
    };

    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`
            }
          ],
          initialValue: record[dataIndex]
        })(<Input ref={node => (input.current = node)} onPressEnter={save} onBlur={save} />)}
      </Form.Item>
    ) : (
      <div className='editable-cell-value-wrap' style={{ paddingRight: 24 }} onClick={toggleEdit}>
        {children}
      </div>
    );
  };

  return (
    <td {...restProps}>
      {editable ? <EditableContext.Consumer>{renderCell}</EditableContext.Consumer> : children}
    </td>
  );
};

const WithEditableCells: React.FC = () => {
  const [dataSource, setDataSource] = useState(tableDataSource);
  const [count, setCount] = useState(2);

  const handleDelete = key => {
    setDataSource(dataSource.filter(item => item.key !== key));
  };

  const handleAdd = () => {
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`
    };

    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleSave = row => {
    const newData = [...dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];

    newData[index] = { ...item, ...row };
    setDataSource(newData);
  };

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '30%',
      editable: true
    },
    {
      title: 'age',
      dataIndex: 'age'
    },
    {
      title: 'address',
      dataIndex: 'address'
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title='Sure to delete?' onConfirm={() => handleDelete(record.key)}>
            <a onClick={e => e.preventDefault()} href='#'>Delete</a>
          </Popconfirm>
        ) : null
    }
  ];

  const components = {
    body: {
      row: EditableFormRow,
      cell: EditableCell
    }
  };

  const tableColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: record => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave
      })
    };
  });

  return (
    <>
      <Button onClick={handleAdd} type='primary' style={{ marginBottom: 16 }}>
        Add a row
      </Button>
      <Table
        pagination={false}
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={tableColumns}
      />
    </>
  );
};

export default WithEditableCells;

import React, { useCallback, useEffect, useState, useRef } from "react";
import { Dropdown, Button, PageHeader, Table, Input } from "antd";

import { EllipsisOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { crud } from "@/redux/crud/actions";
import { selectListItems } from "@/redux/crud/selectors";

import uniqueId from "@/utils/uinqueId";

export default function DataTable({ config, DropDownRowMenu, AddNewItem }) {
  const inputColorRef = useRef(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [coloredRow, setColoredRow] = useState([]);
  const [color, setColor] = useState("");
  const openColorBox = () => {
    inputColorRef.current.click();
  };
  const handelColorChange = (e) => {
    console.log(e.target.value);
    setColoredRow([...coloredRow, ...selectedRowKeys]);
    setColor(e.target.value);
    // setColorRows(selectedRowKeys);
  };
  function MakeNewColor() {
    return (
      <div style={{ position: "relative", display: "inline-block" }}>
        <Button onClick={openColorBox}>Make new Color</Button>
        <input
          type="color"
          focus={true}
          ref={inputColorRef}
          onChange={handelColorChange}
          style={{
            opacity: 0,
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
          }}
        />
      </div>
    );
  }
  let { entity, dataTableColumns, dataTableTitle } = config;
  const newdataTableColumns = dataTableColumns.map((obj) => ({
    ...obj,
    render: (text, row) => {
      return {
        props: {
          style: { background: coloredRow.includes(row._id) ? color : "" },
        },
        children: text,
      };
    },
  }));
  dataTableColumns = [
    ...newdataTableColumns,
    {
      title: "",
      render: (row) => {
        return {
          props: {
            style: { background: coloredRow.includes(row._id) ? color : "" },
          },
          children: (
            <Dropdown overlay={DropDownRowMenu({ row })} trigger={["click"]}>
              <EllipsisOutlined
                style={{ cursor: "pointer", fontSize: "24px" }}
              />
            </Dropdown>
          ),
        };
      },
    },
  ];

  const { result: listResult, isLoading: listIsLoading } =
    useSelector(selectListItems);

  const { pagination, items } = listResult;

  const dispatch = useDispatch();

  const handelDataTableLoad = useCallback((pagination) => {
    dispatch(crud.list(entity, pagination.current));
  }, []);

  useEffect(() => {
    dispatch(crud.list(entity));
  }, []);

  // const [rowId, setRowId] = useState("");
  // const onClickRow = (record, rowIndex) => {
  //   return {
  //     onClick: () => {
  //       setRowId(record._id);
  //     },
  //   };
  // };
  const setRowClassName = (record) => {
    // const result = colorRows.includes(record._id) ? "clickRowStyl" : "";
    return "";
  };

  const handelColorRow = (checked, record, index, originNode) => {
    return {
      props: {
        style: {
          background: coloredRow.includes(record._id) ? color : "",
        },
      },
      children: originNode,
    };
  };

  const onSelectChange = (selectedKeys) => {
    setSelectedRowKeys(selectedKeys);
    console.log("selectedRowKeys changed: ", selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    checkStrictly: false,
    renderCell: handelColorRow,
  };

  return (
    <>
      <PageHeader
        onBack={() => window.history.back()}
        title={dataTableTitle}
        ghost={false}
        extra={[
          <MakeNewColor key={`${uniqueId()}`} config={config} />,
          <Button onClick={handelDataTableLoad} key={`${uniqueId()}`}>
            Refresh
          </Button>,
          <AddNewItem key={`${uniqueId()}`} config={config} />,
        ]}
        style={{
          padding: "20px 0px",
        }}
      ></PageHeader>
      <Table
        columns={dataTableColumns}
        rowKey={(item) => item._id}
        rowSelection={rowSelection}
        // onRow={onClickRow}
        rowClassName={setRowClassName}
        dataSource={items}
        pagination={pagination}
        loading={listIsLoading}
        onChange={handelDataTableLoad}
      />
    </>
  );
}

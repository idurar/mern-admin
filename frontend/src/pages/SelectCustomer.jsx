import React from "react";

import CustomCrudModule from "@/modules/CustomCrudModule";
import CustomerForm from "@/forms/CustomerForm";

function SelectCustomer() {
  const entity = "client";
  const searchConfig = {
    displayLabels: ["company", "surname", "name"],
    searchFields: "company,surname,name",
    outputValue: "_id",
  };

  const panelTitle = "SelectCustomer Panel";
  const dataTableTitle = "Customers Lists";
  const entityDisplayLabels = ["company"];

  const readColumns = [
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Manager Surname",
      dataIndex: "surname",
    },
    {
      title: "Manager Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
  ];
  const dataTableColumns = [
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Manager Surname",
      dataIndex: "surname",
    },
    {
      title: "Manager Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];

  const ADD_NEW_ENTITY = "Add new customer";
  const DATATABLE_TITLE = "customers List";
  const ENTITY_NAME = "customer";
  const CREATE_ENTITY = "Create customer";
  const UPDATE_ENTITY = "Update customer";
  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CustomCrudModule
      createForm={<CustomerForm />}
      updateForm={<CustomerForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default SelectCustomer;

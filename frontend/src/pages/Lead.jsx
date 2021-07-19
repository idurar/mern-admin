import React from "react";

import CrudModule from "@/modules/CrudModule";
import LeadForm from "@/forms/LeadForm";

function Lead() {
  const entity = "lead";
  const searchConfig = {
    displayLabels: ["client"],
    searchFields: "client,email,phone",
    outputValue: "_id",
  };

  const panelTitle = "Lead Panel";
  const dataTableTitle = "Leads Lists";
  const entityDisplayLabels = ["client"];

  const readColumns = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Client",
      dataIndex: "client",
    },
    {
      title: "phone",
      dataIndex: "phone",
    },
    {
      title: "email",
      dataIndex: "email",
    },

    {
      title: "Budget",
      dataIndex: "budget",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Request",
      dataIndex: "request",
    },
  ];
  const dataTableColumns = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Client",
      dataIndex: "client",
    },
    {
      title: "phone",
      dataIndex: "phone",
    },

    {
      title: "Budget",
      dataIndex: "budget",
    },
  ];

  const ADD_NEW_ENTITY = "Add new lead";
  const DATATABLE_TITLE = "leads List";
  const ENTITY_NAME = "lead";
  const CREATE_ENTITY = "Create lead";
  const UPDATE_ENTITY = "Update lead";
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
    <CrudModule
      createForm={<LeadForm />}
      updateForm={<LeadForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Lead;

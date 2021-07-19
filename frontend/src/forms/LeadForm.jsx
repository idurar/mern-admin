import React from "react";
import { Form, Input } from "antd";
import { DatePicker } from "@/components/CustomAntd";

export default function LeadForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Client"
        name="client"
        rules={[
          {
            required: true,
            message: "Please input your client name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone"
        rules={[
          {
            required: true,
            message: "Please input your phone!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Date"
        name="date"
        rules={[
          {
            required: true,
            message: "Please input date!",
          },
        ]}
      >
        <DatePicker format={"DD/MM/YYYY"} />
      </Form.Item>
      <Form.Item
        label="Budget"
        name="budget"
        rules={[
          {
            required: true,
            message: "Please input your budget!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="request"
        name="request"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}

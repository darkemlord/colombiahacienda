import { EmptyState, Layout, Page } from "@shopify/polaris";
import React, { useState } from 'react';
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
import store from 'store-js';
import ResourceListWithProducts from "./components/ResourceListWithProducts";
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

// the version of react that works with functions is used, changes have been made to the original syntax to make it work.
const Index = () => {
  const [open, setOpen] = useState(false) //handle the products window
  const handleSelection = (resources) => {
    setOpen(false);
    console.log(resources)
  }
  return (
    <Page>
    <Layout>
      <TitleBar
        primaryAction={{
          content: 'Select Products',
          onAction: () => {
            setOpen(true);
          }
        }}
      />
      <ResourcePicker // Here is the functionality of the products window picker
        resourceType='Product'
        showVariants={false}
        open={open}
        onSelection={(resources) => {
          handleSelection(resources)
        }}
        onCancel={() => setOpen(false)}
      />
      <EmptyState // This is an empty state, it is used to create new components through polaris
        heading='Manage Your Inventory Transfers'
        action={{content: 'Select Products',
        onAction: () => {
          setOpen(true)
        }
      }}
        image={img}
      >
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, temporibus.</p>
      </EmptyState>
    </Layout>
    <ResourceListWithProducts />
  </Page>
);
}


export default Index;

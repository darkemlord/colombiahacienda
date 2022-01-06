import { EmptyState, Layout, Page } from "@shopify/polaris";
import React, { useState } from 'react';
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";

// the version of react that works with functions is used, changes have been made to the original syntax to make it work.
const Index = () => {
  const [open, setOpen] = useState(false) //handle the image src

  return (
    <Page>
    <Layout>
      <EmptyState // This is an empty state, it is used to create new components through polaris
        heading='Manage Your Inventory Transfers'
        action={{content: 'Handle image',
        onAction: () => {
          console.log('hello world')
        }
      }}
        image={image}
      >
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, temporibus.</p>
      </EmptyState>
    </Layout>
  </Page>
);
}

export default Index;

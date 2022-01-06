import { EmptyState, Layout, Page } from "@shopify/polaris";
import React, { useState } from 'react';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => {
  const [open, setOpen] = useState(false)
  return (
    <Page>
    <Layout>
      <EmptyState // This is an empty state, it is used to create new components through polaris
        heading='Manage Your Inventory Transfers'
        action={{content: 'add transfer',
        onAction: () => {
          setOpen(true);
          console.log(open)
        }
      }}
      >
      </EmptyState>
    </Layout>
  </Page>
);
}

export default Index;

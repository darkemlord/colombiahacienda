import { EmptyState, Layout, Page } from "@shopify/polaris";
import React, { useState } from 'react';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
const imgTwo = 'https://cdn.shopify.com/shopifycloud/web/assets/v1/a64ef20cde1af82ef69556c7ab33c727.svg'
// the version of react that works with functions is used, changes have been made to the original syntax to make it work.
const Index = () => {
  const [image, setImage] = useState(img) //handle the image src
  const [button, setButton] = useState(false) //Handle the button functionality
  return (
    <Page>
    <Layout>
      <EmptyState // This is an empty state, it is used to create new components through polaris
        heading='Manage Your Inventory Transfers'
        action={{content: 'Handle image',
        onAction: () => {
          if(button === false){
            setImage(imgTwo);
            setButton(true)
          } else if(button === true){
            setImage(img);
            setButton(false)
          }
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

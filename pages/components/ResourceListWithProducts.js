import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Card, ResourceList, Stack, TextStyle, Thumbnail } from '@shopify/polaris';
import store from 'store-js';
import { Redirect } from '@shopify/app-bridge/actions';
import { Context } from '@shopify/app-bridge-react';

export const ResourceListWithProducts = () => {
  console.log(store)
  return (
    <div>
      <h1>hola hermosos</h1>
    </div>
  )
}

export default ResourceListWithProducts;

import { EmptyState, Heading, Layout, Page } from "@shopify/polaris";

const Index = () => (
  <Page>
    <Layout>
      <EmptyState // This is an empty state, it is used to create new components through polaris
        heading='Manage Your Inventory Transfers'
        action={{content: 'add transfer',
        onAction: () => this.setState({open:true})
        }}
      >
      </EmptyState>
    </Layout>
  </Page>
);

export default Index;

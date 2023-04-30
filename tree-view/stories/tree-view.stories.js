import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getTreeItem, getTreeView } from '@divriots/starter-furious';

provideDesignSystem().register(getTreeItem(), getTreeView());

export default {
  title: 'Components/Tree View',
  argTypes: {
    renderCollapsedNodes: {
      control: {
        type: 'boolean',
      },
    },
  },
  render: ({ renderCollapsedNodes }) => `
<fs-tree-view
  ${renderCollapsedNodes ? `render-collapsed-nodes="${renderCollapsedNodes}` : ''}
">
  <fs-tree-item>
    Root item 1
    <fs-tree-item>
      Root item 1
      <fs-tree-item>
        Flowers
        <fs-tree-item disabled>Daisy</fs-tree-item>
        <fs-tree-item>
          Sunflower
          <svg slot="start" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 5.5a1 1 0 100 2 1 1 0 000-2zm-5 1a1 1 0 112 0 1 1 0 01-2 0zm3.5-4a.5.5 0 00-1 0V3h-3C5.67 3 5 3.67 5 4.5v4c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-3v-.5zM6.5 4h7c.28 0 .5.22.5.5v4a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-4c0-.28.22-.5.5-.5zm3.75 14c2.62-.04 4.2-.6 5.12-1.44A3.52 3.52 0 0016.5 14h.01v-.69c0-1-.81-1.8-1.8-1.8h-3.2v-.01H5.3c-.99 0-1.8.81-1.8 1.81v.7c.04.77.25 1.75 1.13 2.55.93.84 2.5 1.4 5.12 1.44h.5zm-4.94-5.5h9.38c.45 0 .81.37.81.81v.44c0 .69-.13 1.46-.8 2.07C14 16.45 12.66 17 10 17s-4.01-.55-4.7-1.18a2.63 2.63 0 01-.8-2.07v-.44c0-.44.36-.8.8-.8z"
            />
          </svg>
          <svg slot="end" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 5.5a1 1 0 100 2 1 1 0 000-2zm-5 1a1 1 0 112 0 1 1 0 01-2 0zm3.5-4a.5.5 0 00-1 0V3h-3C5.67 3 5 3.67 5 4.5v4c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-3v-.5zM6.5 4h7c.28 0 .5.22.5.5v4a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-4c0-.28.22-.5.5-.5zm3.75 14c2.62-.04 4.2-.6 5.12-1.44A3.52 3.52 0 0016.5 14h.01v-.69c0-1-.81-1.8-1.8-1.8h-3.2v-.01H5.3c-.99 0-1.8.81-1.8 1.81v.7c.04.77.25 1.75 1.13 2.55.93.84 2.5 1.4 5.12 1.44h.5zm-4.94-5.5h9.38c.45 0 .81.37.81.81v.44c0 .69-.13 1.46-.8 2.07C14 16.45 12.66 17 10 17s-4.01-.55-4.7-1.18a2.63 2.63 0 01-.8-2.07v-.44c0-.44.36-.8.8-.8z"
            />
          </svg>
        </fs-tree-item>
        <fs-tree-item>Rose</fs-tree-item>
      </fs-tree-item>
      <fs-tree-item>Nested item 2</fs-tree-item>
      <fs-tree-item>Nested item 3</fs-tree-item>
    </fs-tree-item>
    <fs-tree-item>Nested item 2</fs-tree-item>
    <fs-tree-item>Nested item 3</fs-tree-item>
  </fs-tree-item>
  <fs-tree-item>
    Root item 2
    <fs-divider></fs-divider>
    <fs-tree-item>
      Flowers
      <fs-tree-item disabled>Daisy</fs-tree-item>
      <fs-tree-item>Sunflower</fs-tree-item>
      <fs-tree-item>Rose</fs-tree-item>
    </fs-tree-item>
    <fs-tree-item>Nested item 2</fs-tree-item>
    <fs-tree-item>Nested item 3</fs-tree-item>
  </fs-tree-item>
  <fs-tree-item> Root item 3 - Leaf Erikson </fs-tree-item>
</fs-tree-view>`,
};

export const defaultStory = () => html`
  <fs-tree-view>
    <fs-tree-item>
      Tree item 1
      <fs-tree-item slot="item">Tree item 1 - 1</fs-tree-item>
    </fs-tree-item>
    <fs-tree-item>Tree item 2</fs-tree-item>
  </fs-tree-view>
`;
defaultStory.storyName = 'Default';

export const flatStory = () => html`
  <fs-tree-view>
    <fs-tree-item>Tree item 1</fs-tree-item>
    <fs-tree-item>Tree item 2</fs-tree-item>
    <fs-tree-item>Tree item 3</fs-tree-item>
    <fs-tree-item>Tree item 4</fs-tree-item>
  </fs-tree-view>
`;
flatStory.storyName = 'Flat';

export const playgroundStory = {
  name: 'Playground (S2D)',
  args: {
    renderCollapsedNodes: false,
  },
};

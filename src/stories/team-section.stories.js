import TeamSection from '../components/team-section.vue';
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

export default {
  title: 'ORGANISMS/TeamSection',
  component: TeamSection,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    features: { description: 'Content for features' },
    numberPerRow: { control: 'number', description: 'Number of features per row' },
    noHoverJump: { description: 'To disable the jump on Hover' }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TeamSection },
  template: '<team-section v-bind="$props" v-on="$listeners" />',
});

export const Primary = Template.bind({});
Primary.args = {
  numberPerRow: 4,
  team: [
    {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      img: require('../assets/ano.jpg'),
      name: 'John Johnson',
      title: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      facebook: 'https://quasar-design-ui.dev',
      twitter: 'https://quasar-design-ui.dev',
      instagram: 'https://quasar-design-ui.dev',
      github: 'https://quasar-design-ui.dev',
    },
    {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      img: require('../assets/ano2.jpg'),
      name: 'John Johnson',
      title: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      twitter: 'https://quasar-design-ui.dev'
    },
    {
      name: 'John Johnson',
      title: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      github: 'https://quasar-design-ui.dev'
    },
    {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      img: require('../assets/ano2.jpg'),
      name: 'John Johnson',
      title: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      instagram: 'https://quasar-design-ui.dev'
    }
  ]
};

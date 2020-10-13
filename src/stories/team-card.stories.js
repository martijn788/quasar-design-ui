import TeamCard from '../components/team-card.vue';
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

export default {
  title: 'MOLECULES/TeamCard',
  component: TeamCard,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    name: { description: 'Name of the team member' },
    title: { description: 'Job title of the team member' },
    description: { description: 'description of the team member' },
    facebook: { description: 'facebook-url of the team member' },
    instagram: { description: 'instagram-url of the team member' },
    twitter: { description: 'twitter-url of the team member' },
    linkedin: { description: 'linkedin-url of the team member' },
    github: { description: 'github-url of the team member' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TeamCard },
  template: '<team-card v-bind="$props" v-on="$listeners" style="max-width: 300px" />',
});

export const Primary = Template.bind({});
Primary.args = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  img: require('../assets/ano2.jpg'),
  name: 'John Johnson',
  title: 'developer',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  facebook: 'https://quasar-design-ui.dev',
  instagram: 'https://quasar-design-ui.dev',
  twitter: 'https://quasar-design-ui.dev',
  linkedin: 'https://quasar-design-ui.dev',
  github: 'https://quasar-design-ui.dev',
};

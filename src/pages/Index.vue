<template>
  <div>
    <hero-section />
    <feature-section
      :features="features"
      class="q-px-xl"
     />
     <call-to-action
        :img="require('../assets/parallax.jpg')"
      />
     <team-section :team="team" />
  </div>
</template>

<script lang="ts">
import HeroSection from 'components/hero-section.vue';
import FeatureSection from 'components/feature-section.vue';
import CallToAction from 'components/call-to-action.vue';
import TeamSection from 'components/team-section.vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'PageIndex',
  components: { HeroSection, FeatureSection, CallToAction, TeamSection },
  setup() {
    const features = [
    {
      index: 1,
      title: 'Feature 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'alarm',
      color: 'red',
      buttonLabel: 'More info...'
    },
    {
      index: 2,
      title: 'Feature 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'bookmark',
      color: 'blue',
      buttonLabel: 'More info...'
    },
    {
      index: 3,
      title: 'Feature 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'code',
      color: 'green',
      buttonLabel: 'More info...'
    },
    {
      index: 4,
      title: 'Feature 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'favorite',
      color: 'black',
      buttonLabel: 'More info...'
    }
  ];

      const team = [
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
  ];

  return { features, team };
  }
});
</script>

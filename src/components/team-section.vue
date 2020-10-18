<template>
  <div class="row">
    <div class="col-12 text-center">
      <slot name="title text-weight-bolder">
        <h2>
          {{ title }}
        </h2>
        <span class="description text-weight-light">
          {{ description }}
        </span>
      </slot>
    </div>
    <div v-for="(member, index) in team" class="q-pa-md" :class="rowClass" :key="index">
      <team-card
        :img="member.img"
        :name="member.name"
        :title="member.title"
        :description="member.description"
        :facebook="member.facebook"
        :twitter="member.twitter"
        :instagram="member.instagram"
        :linkedin="member.linkedin"
        :github="member.github"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, computed
} from '@vue/composition-api';
import TeamCard from './team-card.vue';

export default defineComponent({
  name: 'teamSection',
  components: { TeamCard },
  props: {
    title: {
      type: String, 
      required: false, 
      default: 'Our team'
    },
    description: {
      type: String, 
      required: false, 
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    team: {
      type: Array,
      required: true,
    },
    numberPerRow: {
      type: Number,
      required: false,
      default: 4
    },
  },
  setup(props) {
    const rowClass = computed(() => {
      const col = Math.round(12 / props.numberPerRow)
      return `col-md-${col}`
    });

    return { rowClass };
  },
});
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
.description {
  font-size: 1.2rem;
}
</style>
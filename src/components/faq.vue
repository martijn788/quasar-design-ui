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
      <q-list
        :bordered="noPopup"
        class="border-rounded text-left"
      >
        <q-expansion-item
          v-for="(question, index) in questions"
          group="faq"
          :popup="!noPopup"
          :label="question.question"
          expand-separator
          :key="index"
          header-style="font-weight: bolder"
        >
          <q-card>
            <q-card-section>
              {{ question.answer }}
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'faq',
  props: {
    title: {
      type: String, 
      required: false, 
      default: 'FAQ'
    },
    description: {
      type: String, 
      required: false, 
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    noPopup: {
      type: Boolean, 
      required: false,
      default: null
    },
    questions: {
      type: Array, 
      required: false, 
      default: () => {
        return [
          {
            question: 'When can i start using it?',
            answer: 'You can use it whenever you want. However, before release version 1.0 there might be some breaking changes.',
          },
          {
            question: 'Where can I download it?',
            answer: 'You can udownload it via github, npm or yarn. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          },
          {
            question: 'When can i start using it?',
            answer: 'You can use it whenever you want. However, before release version 1.0 there might be some breaking changes.',
          },
          {
            question: 'Where can I download it?',
            answer: 'You can udownload it via github, npm or yarn. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          },
        ]
      }
    },
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
.q-list {
  max-width: 800px;
  margin: 25px auto;
}
</style>
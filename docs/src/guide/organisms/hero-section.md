# Hero Section

## Installation

```
<script>
import { HeroSection } from 'quasar-design-ui';

export default {
  components: { HeroSection }
};
</script>
```

## Basic Example with gradient

::: demo
<template>

<!--surrounding div necessary for vuepress-->
<div style="position: relative; overflow: hidden; z-index: 3;">
<hero-section title="Basic example with gradient" background-image="linear-gradient(50deg, #30cfd0 0%, #330867 100%)" />
</div>
</template>

<script>
import { HeroSection } from 'quasar-design-ui';

export default {
  components: { HeroSection },
};
</script>

:::

## Basic Example with color

::: demo
<template>

<!--surrounding div necessary for vuepress-->
<div style="position: relative; overflow: hidden; z-index: 3;">
<hero-section background-color="#848494" />
</div>
</template>

<script>
import { HeroSection } from 'quasar-design-ui';

export default {
  components: { HeroSection },
};
</script>

:::

## Basic Example with image

::: demo
<template>

<!--surrounding div necessary for vuepress-->
<div style="position: relative; overflow: hidden; z-index: 3;">
<hero-section background-image="url('https://quasar-design-ui.dev/storybook/static/media/hero-section-bg.ea2f3933.jpg')" />
</div>
</template>

<script>
import { HeroSection } from 'quasar-design-ui';

export default {
  components: { HeroSection },
};
</script>

:::

## Props

### title

- title in the component
- string
- default: `We bring technology to the people`

### description

- Description/subtitle in the component
- string
- default: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`

### button-label

- Label for the button
- string
- default: `More info...`

### button-color

- Color of the button
- string (quasar color palette)[https://quasar.dev/style/color-palette]
- default: `primary`

### background-color

- Backgroundcolor of the component
- string
- default: `none`

### background-image

- Background-image in the component
- string
- default: `none`

### text-color

- color of the text
- string
- default: `white`

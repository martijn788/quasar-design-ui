# Team Section

## Installation

```
<script>
import { TeamSection } from 'quasar-design-ui';

export default {
  components: { TeamSection }
};
</script>
```

## Basic Example

::: demo
<template>
<team-section :team="team" />
</template>

<script>
import { TeamSection } from 'quasar-design-ui';

export default {
  components: { TeamSection },
  data: function() {
    return {
      team: [{"image": "https://quasar-design-ui.dev/img/ano.79ec264d.jpg", "name":"John Johnson","title":"Developer","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","facebook":"https://quasar-design-ui.dev","twitter":"https://quasar-design-ui.dev","github":"https://quasar-design-ui.dev"},{"image": "https://quasar-design-ui.dev/img/ano2.c1f83d9b.jpg", "name":"John Johnson","title":"Developer","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","twitter":"https://quasar-design-ui.dev"},{"image": "https://quasar-design-ui.dev/img/ano.79ec264d.jpg", "name":"John Johnson","title":"Developer","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","github":"https://quasar-design-ui.dev"},{ "image": "https://quasar-design-ui.dev/img/ano2.c1f83d9b.jpg", "name":"John Johnson","title":"Developer","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","instagram":"https://quasar-design-ui.dev"}]
    }
  }
};
</script>
<style>
  /* Only necessary in vuepress because it overwrides styles.. */
  a > img {
    width: 25px
  }
</style>

:::

## props

### title

- Title of the component
- string
- default: `Our team`

### description

- description/subtitle of the component
- string
- default: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`

### number-per-row

- Number of members per row
- number
- default: `4`

### team

- Members of the team
- array of the following props:

#### name

- Name of the member
- string

#### title

- title of the member
- string

#### image

- image of the member
- string

#### description

- description of the member
- string

#### facebook

- facebook-url of the member
- string

#### instagram

- instagram-url of the member
- string

#### twitter

- twitter-url of the member
- string

#### github

- github-url of the member
- string

#### linkedin

- linkedin-url of the member
- string

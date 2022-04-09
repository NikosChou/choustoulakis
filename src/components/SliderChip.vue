<template>
  <div class="d-flex">
    <div v-for="s in items" :key="s.href" class="mr-1">
      <v-hover v-slot="{ hover }">
        <v-btn
          x-small
          class="my-button mx-1"
          :class="{ 'on-hover': hover }"
          fab
          outlined
          target="_blank"
          :href="s.href"
        >
          <v-icon>{{ s.icon }}</v-icon>
        </v-btn>
      </v-hover>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: null
  },
  data() {
    return {
      selected: null
    };
  },
  methods: {
    unSelectedAll() {
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].selected = false;
        this.selected = null;
      }
    },
    selectMe(index) {
      for (let i = 0; i < this.items.length; i++) {
        if (i === index) {
          this.items[i].selected = true;
          this.selected = this.items[index];
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.my-button {
  color: var(--v-secondary-base);
  transition: 0.3s;
}
.on-hover {
  color: var(--v-accent-base);
}

.my-div {
  background: var(--v-secondary-base);
  color: var(--v-info-base);
  overflow: hidden;
  white-space: nowrap;
  border-radius: 1000px;
}

a {
  text-decoration: unset;
}
</style>

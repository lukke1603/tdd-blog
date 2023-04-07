import type { DirectiveBinding } from "vue";

export default (el: HTMLElement, id: DirectiveBinding<string>) => {
  if (process.env.NODE_ENV !== 'production') {
    el.setAttribute('data-test', id.value);
  }
}
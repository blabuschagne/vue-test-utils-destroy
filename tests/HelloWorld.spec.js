import { shallowMount } from "@vue/test-utils";
import Component from "../src/components/HelloWorld.vue";

describe("HelloWorld Component", () => {
  let wrapper;

  afterEach(() => {
    wrapper.destroy();
  });

  it("foos", () => {
    wrapper = shallowMount(Component);

    expect(wrapper.vm.$options.foo).toBe(undefined);

    wrapper.vm.$options.foo = "bar";

    expect(wrapper.vm.$options.foo).toBe("bar");
  });

  it("bars", () => {
    // Fails with wrapper.vm.$options.foo being 'bar'

    expect(wrapper.vm.$options.foo).toBe(undefined);
  });
});

import { shallowMount } from "@vue/test-utils";
import QBoolean from "@/components/QBoolean.vue";
import { single } from "../data/QBooleanTestData";
import { findByTestId } from "../findByTestId";

describe("QBoolean.vue", () => {
  it("renders default labels when options empty", () => {
    const wrapper = shallowMount(QBoolean, {
      propsData: {
        title: single.title,
        options: {},
      },
    });
    const title = findByTestId(wrapper, "b-title");
    expect(title.text()).toMatch(single.title);

    const yes = findByTestId(wrapper, "b-label-true");
    expect(yes.text()).toMatch("True");

    const no = findByTestId(wrapper, "b-label-false");
    expect(no.text()).toMatch("False");
  });

  it("renders props when passed", () => {
    const wrapper = shallowMount(QBoolean, {
      propsData: {
        title: single.title,
        options: single.options,
      },
    });
    const title = findByTestId(wrapper, "b-title");
    expect(title.text()).toMatch(single.title);

    const yes = findByTestId(wrapper, "b-label-true");
    expect(yes.text()).toMatch(single.options.labelTrue);

    const no = findByTestId(wrapper, "b-label-false");
    expect(no.text()).toMatch(single.options.labelFalse);
  });

  it("emits event on False selection", async () => {
    const wrapper = shallowMount(QBoolean, {
      propsData: {
        title: single.title,
        options: single.options,
      },
    });
  });
});

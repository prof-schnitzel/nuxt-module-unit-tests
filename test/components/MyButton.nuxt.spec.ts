import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { describe, it, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";
import { mountSuspended } from "@nuxt/test-utils/runtime";

import App from "../fixtures/basic/app.vue";
import MyButton from "../../src/runtime/components/MyButton.vue";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe("My Module tests if:", async () => {
  await setup({
    rootDir: resolve(__dirname, "../fixtures/basic"),
  });

  it("HTML renders correctly", async () => {
    // Fetch the root page
    const html = await $fetch("/");

    // Check if your html renders the component correctly
    expect(html).toContain("<button>Foo</button>");
  });

  it("App.vue renders correctly", async () => {
    // Mount the App component
    const component = await mountSuspended(App);

    // Check if App component renders content correctly
    expect(component.html()).toMatchInlineSnapshot(`
      "<div>
        <div>basic</div><button>Foo</button>
      </div>"
    `);

    // Check App and find button content
    expect(component.find("button").text()).toBe("Foo");
  });

  it("MyButton.vue renders correctly", async () => {
    // Mount the MyButton component
    const component = await mountSuspended(MyButton);

    // Check button content
    expect(component.text()).toBe("Foo");
  });
});

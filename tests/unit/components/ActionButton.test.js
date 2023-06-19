import { render, screen } from "@testing-library/vue";
import ActionButton from "@/components/ActionButton.vue";

describe("ActionButton", () => {
  it("Renders Text", () => {
    render(ActionButton, {
      props: {
        text: "Click Me",
        type: "primary",
      },
    });

    const button = screen.getByRole("button", {
      name: /click me/i,
    });

    expect(button).toBeInTheDocument();
  });
  it("Applies one of the several Styles to button", () => {
    render(ActionButton, {
      props: {
        text: "Click Me",
        type: "primary",
      },
    });
    const button = screen.getByRole("button", {
      name: /click me/i,
    });
    expect(button).toHaveClass("primary");
  });
});

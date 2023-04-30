import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("fetchTodohandler function", () => {
  test("will fetch todos from firebase", async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => [
        {
          text: "Todo 1",
          isChecked: true,
        },
        {
          text: "Todo 2",
          isChecked: true,
        },
      ],
    });

    render(<App />);

    const listItemElements = await screen.findAllByRole("list");
    expect(listItemElements).not.toHaveLength(0);
  });
});

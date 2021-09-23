import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import Health from "./health";

test("renders custom progress bar", () => {
	const { getByRole } = render(<Health health={50} />);
	const progressbar = getByRole("outerbox");
	expect(progressbar).toBeInTheDocument();
});

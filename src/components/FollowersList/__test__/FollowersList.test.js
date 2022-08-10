import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  beforeEach(() => {
    console.log("Running before each test");
  });

  beforeAll(() => {
    console.log("Running once before all tests");
  });

  afterEach(() => {
    console.log("Running after each test");
  });

  afterAll(() => {
    console.log("Running after all test");
  });

  it("should render a single follower", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    // screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render a single follower 1", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  //   it("should render followers list", async () => {
  //     render(<MockFollowersList />);
  //     const followerDivElement = await screen.findAllByTestId(/follower-item-/i);
  //     expect(followerDivElement.length).toBe(5);
  //   });
});

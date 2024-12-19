import { NavLink } from '@remix-run/react';

export default function Index() {
  return (
    <>
      <p id="index-page">
        This is a demo for Remix.
        <br />
        Check out <a href="https://remix.run">the docs at remix.run</a>.
      </p>
      <nav>
        <br />
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/framer-motion">framer-motion</NavLink>
        <br />
        <NavLink to="/issues">issues</NavLink>
      </nav>
    </>
  );
}

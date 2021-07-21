import React from "react";
import { UserIcon } from "./Icons";

export const Header = () => (
  <div>
    <a href="./">ArtisticPiece</a>
    <a href="./Training">Training</a>
    <a href="./signin">
      <UserIcon />
      <span>Sign In</span>
    </a>
  </div>
);

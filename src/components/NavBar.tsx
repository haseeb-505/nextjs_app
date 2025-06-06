"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function NavBar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/basic-music-theory">
              Basic Music Theory
            </HoveredLink>
            <HoveredLink href="/advance-composition">
              Advance Composition
            </HoveredLink>
            <HoveredLink href="/songwriting">Songwriting</HoveredLink>
            <HoveredLink href="/music-production">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact-us"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
        <Link href={"/sequence-board"} passHref>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Sequence Board"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default NavBar;

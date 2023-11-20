import React from "react";
import Link from "next/link";
import Logo from "./Logo";

function Navbar() {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />

            <ul className="hidden md:flex gap-x-6 text-white ">
              <li>
                <Link href="/rights">
                  <p>Rechte / Rights</p>
                </Link>
              </li>
              <li>
                <Link href="/roles">
                  <p>Rollen / Roles</p>
                </Link>
              </li>
              <li>
                <Link href="/administration">
                  <p>Verwaltung / Administration</p>
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

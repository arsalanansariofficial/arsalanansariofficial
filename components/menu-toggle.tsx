'use client';

import Link from 'next/link';
import { useState } from 'react';

import * as Drawer from '@/components/ui/drawer';

export default function MenuToggle() {
  const [open, setOpen] = useState<boolean>();

  return (
    <Drawer.Drawer open={open} onOpenChange={setOpen}>
      <Drawer.DrawerTrigger asChild onClick={e => e.currentTarget.blur()}>
        <button className="flex cursor-pointer flex-col gap-2 sm:hidden">
          <span className="bg-foreground block h-0.5 w-4"></span>
          <span className="bg-foreground block h-0.5 w-4"></span>
        </button>
      </Drawer.DrawerTrigger>
      <Drawer.DrawerContent>
        <Drawer.DrawerTitle className="sr-only">
          Navigation Menu
        </Drawer.DrawerTitle>
        <Drawer.DrawerDescription className="sr-only">
          This is the drawer description
        </Drawer.DrawerDescription>
        <ul className="text-muted-foreground space-y-2 p-4 font-sans">
          <li className="hover:text-foreground transition-colors">
            <Link href="/posts" onClick={() => setOpen(false)}>
              Posts
            </Link>
          </li>
          <li className="hover:text-foreground transition-colors">
            <Link href="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
          </li>
          <li className="hover:text-foreground transition-colors">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="hover:text-foreground transition-colors">
            <a href="https://raw.githubusercontent.com/arsalanansariofficial/resources/refs/heads/main/documents/arsalan-ansari_resume.pdf">
              Resume
            </a>
          </li>
        </ul>
      </Drawer.DrawerContent>
    </Drawer.Drawer>
  );
}

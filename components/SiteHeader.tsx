'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import {
  Menu,
  Swords,
  Axe,
  Shield,
  Landmark,
  Map,
  Users,
  Megaphone,
} from 'lucide-react';

type NavItem = { href: string; label: string; icon?: React.ComponentType<any> };

const primary: NavItem[] = [
  { href: '/events/bear-hunt', label: 'Bear Hunt', icon: Swords },
  { href: '/events/viking-vengeance', label: 'Vikings', icon: Axe },
  { href: '/events/terrors', label: 'Terrors', icon: Shield },
];

const secondary: NavItem[] = [
  { href: '/mechanics/rally-rules', label: 'Rally Rules', icon: Landmark },
  { href: '/territory/fertile-lands', label: 'Fertile Lands', icon: Map },
  { href: '/heroes/chenko', label: 'Heroes', icon: Users },
  { href: '/alliance-notices', label: 'Notices', icon: Megaphone },
];

function DesktopNav() {
  const pathname = usePathname();

  const LinkBtn = ({ item }: { item: NavItem }) => (
    <Button
      variant={pathname.startsWith(item.href) ? 'secondary' : 'ghost'}
      size="sm"
      asChild
      className="px-3"
    >
      <Link href={item.href}>{item.label}</Link>
    </Button>
  );

  return (
    <nav className="hidden md:flex items-center gap-1">
      {primary.map((i) => <LinkBtn key={i.href} item={i} />)}
      <Separator orientation="vertical" className="mx-2 h-5" />
      {secondary.map((i) => <LinkBtn key={i.href} item={i} />)}
    </nav>
  );
}

function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const NavGroup = ({ title, items }: { title: string; items: NavItem[] }) => (
    <div>
      <p className="px-1 pb-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
        {title}
      </p>
      <div className="grid gap-1">
        {items.map((item) => {
          const ActiveIcon = item.icon;
          const active = pathname.startsWith(item.href);
          return (
            <Button
              key={item.href}
              asChild
              variant={active ? 'secondary' : 'ghost'}
              className="justify-start"
            >
              <Link href={item.href} className="flex items-center gap-2">
                {ActiveIcon ? <ActiveIcon className="h-4 w-4" /> : null}
                {item.label}
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" aria-label="Open menu">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80">
          <SheetHeader>
            <SheetTitle className="text-base">Navigation</SheetTitle>
          </SheetHeader>

          <div className="mt-4 space-y-5">
            <NavGroup title="Events" items={primary} />
            <Separator />
            <NavGroup title="Guides & Tools" items={secondary} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm header-accent">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight text-primary text-base sm:text-lg">
          Kingshot Hub
        </Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}

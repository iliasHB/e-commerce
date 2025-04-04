'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Bars3Icon,
  BellIcon,
  // CalendarIcon,
  // ChartPieIcon,
  // Cog6ToothIcon,
  // DocumentDuplicateIcon,
  // FolderIcon,
  HomeIcon,
  // UsersIcon,
  // XMarkIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline'
import {
  Button,
  // Dialog,
  // DialogBackdrop,
  // DialogPanel,
  // Menu,
  // MenuButton,
  // MenuItem,
  // MenuItems,
  // TransitionChild,
} from '@headlessui/react'

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  // { name: 'Order', href: '/order', icon: UsersIcon },
  { name: 'Cart', href: '/cart', icon: ShoppingCartIcon },
];

// const userNavigation = [
//   { name: 'Your profile', href: '#' },
// ]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const pathname = usePathname();
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isLogin, setIsLogin] = useState(true);

  // const handleLogout = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   // logout.mutate({});
  // }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Mobile Menu Button */}
            <Button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Bars3Icon className="w-6 h-6" />
            </Button>

            {/* Left: App Name */}
            <div className="flex items-center space-x-6">
              <h1 className="text-xl font-bold text-gray-800">E-commerce</h1>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} className={`flex items-center text-sm font-medium transition ${pathname === item.href ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
                    }`}>
                    <item.icon className="w-5 h-5 mr-1" />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right: Search & Profile */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              {/* Search Bar */}
              <div className="relative w-64 md:w-80">
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400"
                />
                <input
                  name="search"
                  type="search"
                  placeholder="Search"
                  className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Notifications */}
              <Button type="button" className="p-2.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </Button>

              {/* Login Button & Dropdown */}
              <div className="relative">
                <Button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
                  onClick={() => setIsLoginOpen(!isLoginOpen)}
                >
                  Login
                </Button>

                {/* Dropdown Form */}
                {isLoginOpen && (
                  <div className="absolute right-0 mt-2 w-96 min-w-[350px] bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                    <h2 className="text-lg font-semibold text-gray-800">Login</h2>
                    <form className="mt-3 space-y-3">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 border mt-2 mb-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
                      >
                        Login
                      </Button>
                    </form>
                  </div>
                )}
              </div>

              
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

 {/* Profile Dropdown */}
              {/* <Menu as="div" className="relative">
                <MenuButton className="flex items-center p-1.5">
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt="Profile"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full bg-gray-50"
                  />
                  <span className="hidden lg:flex items-center ml-4 text-sm font-semibold text-gray-900">
                    Habeeb
                    <ChevronDownIcon aria-hidden="true" className="ml-2 size-5 text-gray-400" />
                  </span>
                </MenuButton>
                <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5">
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <Link href={item.href} className="block px-3 py-1 text-sm text-gray-900 hover:bg-gray-50">
                        {item.name}
                      </Link>
                    </MenuItem>
                  ))}
                  <MenuItem>
                    <span
                      className="flex cursor-pointer items-center px-3 py-1 text-sm text-gray-900 hover:bg-red-800 hover:text-white"
                      onClick={handleLogout}
                    >Logout</span>
                  </MenuItem>
                </MenuItems>
              </Menu> */}
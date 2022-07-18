
/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <img src="/assets/dropdown.png" className="w-40px h-40px" alt="dropdown" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Clayvant Inc
                </span>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-text-color',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Business name 2
                </span>
              )}
            </Menu.Item>
          </div>
  
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-text-color',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Business name 3
                </span>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-pink-bold' : 'text-pink-light',
                    'block px-4 py-2 text-xs'
                  )}
                >
                  Add a business
                </span>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
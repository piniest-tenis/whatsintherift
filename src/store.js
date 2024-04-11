'use client'

import { create } from 'zustand';

const useRiftStore = create(set => ({
    navOpen: false,
    setNavOpen: () => set(state => ({navOpen: true})),
    setNavClosed: () => set(state => ({navOpen: false}))
}))
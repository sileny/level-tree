import Vue from 'vue'
import { ElementUIComponent } from './component'

import { AElTree, TreeData } from './tree'

export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

/** The version of element-ui */
export const version: string

/**
 * Install all element-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(ElementUI)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** ElementUI component common definition */
export type Component = ElementUIComponent

/** Tree Component */
export class Tree<K = any, D = TreeData> extends AElTree<K, D> {}

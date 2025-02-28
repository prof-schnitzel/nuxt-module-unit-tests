import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup } from '@nuxt/test-utils'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import {MyButton} from '../../src/runtime/components/MyButton.vue'

describe('MyButton', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('../fixtures/basic', import.meta.url)),
  })

  it('renders correctly', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await mountSuspended(MyButton)
    expect(html).toContain('<button>')
  })
})

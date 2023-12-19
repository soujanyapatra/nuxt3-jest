import { mount } from '@vue/test-utils'
import testPage from '../pages/index.vue'
import sumFun from '../pages/my-test-fun'
import filteredItem from '../pages/filter-test'


describe("index page", () => {
  it("shows interactive click counter", async () => {
    const page = mount(testPage)
    expect(page.text()).toContain("0 clicks")
    const button = page.find("button")
    await button.trigger("click")
    expect(page.text()).toContain("2 clicks")
  })
})

describe('Function should return', () => {
  test('it should return a greeting', () => {
    const result = sumFun(2, 4)
    expect(result).toBe(6)
  })

  test('it should return a object', () => {
    const result = filteredItem('laptop');
    expect(result).toEqual([
      {
        name: 'Laptop',
        price: 10,
      }
    ])
  })
})

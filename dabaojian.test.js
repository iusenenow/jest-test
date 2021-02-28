const { baojian1, baojian2 } = require('./dabaojian')

test('保健1方法-300元', () => {
  expect(baojian1(300)).toBe('至尊享受')
})

test('保健2方法-2000元', () => {
  expect(baojian2(2000)).toBe('双人服务')
})

test('保健1-100元', () => {
  expect(baojian1(100)).toBe('基本按摩')
})

test('保健2-500元', () => {
  expect(baojian2(500)).toBe('单人服务')
})

test('123', () => {
  expect(baojian2(10000)).toBe('双人服务')
})
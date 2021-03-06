test('007号技师测试', () => {
  expect('007号技师').toBe('007号技师')
})

// test('测试严格相等', () => {
//   const a = { number: "007" }
//   expect(a).toBe({ number: "007" })
// }) //不通过，因为toBe相当于===

test('测试严格相等', () => {
  const a = { number: "007" }
  expect(a).toEqual({ number: "007" })
})

test('toBeNull测试', () => {
  const a = null
  expect(a).toBeNull()
})

test('toBeUndefined', () => {
  const a = undefined
  expect(a).toBeUndefined()
})

test('toBeDefined', () => {
  const a = 'Teresa'
  expect(a).toBeDefined()
})

test('toBeTruthy', () => {
  const a = 99
  expect(a).toBeTruthy()
})

test('toBeFalsy', () => {
  const a = false
  expect(a).toBeFalsy()
})

test('toBeGreaterThan', () => {
  const a = 10
  expect(a).toBeGreaterThan(8)
})

test('toBeLessThan', () => {
  const a = 10
  expect(a).toBeLessThan(20)
})

test('toBeGreaterThanOrEqual', () => {
  const a = 10
  expect(a).toBeGreaterThanOrEqual(10)
})

test('toBeLessThanOrEqual', () => {
  const a = 10
  expect(a).toBeLessThanOrEqual(10)
})

test('toBeCloseTo', () => {
  const a = 0.1
  const b = 0.2
  expect(a + b).toBeCloseTo(0.3)
})

test('toMatch', () => {
  const str = "谢大脚、刘英、小红"
  expect(str).toMatch('谢大脚')
})

test('toMatch', () => {
  const str = "谢大脚、刘英、小红"
  expect(str).toMatch(/谢大脚/)
})
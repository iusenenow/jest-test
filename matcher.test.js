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
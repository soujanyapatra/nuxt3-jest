const filteredItem = (searchText: string) => {
  const items = [
    {
      name: 'Laptop',
      price: 10,
    },
    {
      name: 'Mouse',
      price: 44,
    },
    {
      name: 'KeyBoard',
      price: 23,
    },
    {
      name: 'Monitor',
      price: 43,
    },
    {
      name: 'Mobile',
      price: 12,
    }
  ]

  return items.filter((e) => e.name.toLowerCase().includes(searchText.toLowerCase()))
}

export default filteredItem

'use client'
import { FilterBox } from './FilterBox'
import { TableBox } from './TableBox'

const FILTERS = [
  { label: 'Setor', name: 'setor', options: ['Tecnologia', 'Automobilístico'] },
  { label: 'Ano', name: 'ano', options: [2023, 2024] },
]

const TABLE_HEAD = [
  { key: 'empresa', label: 'Empresa' },
  { key: 'setor', label: 'Setor' },
  { key: 'ano', label: 'Ano' },
]

const DATA_TABLE = [
  { empresa: 'Microsoft', setor: 'Tecnologia', ano: 2023 },
  { empresa: 'Apple', setor: 'Tecnologia', ano: 2024 },
  { empresa: 'Tesla', setor: 'Automobilístico', ano: 2023 },
  { empresa: 'Ferrari', setor: 'Automobilístico', ano: 2024 },
]

export function Home() {
  return (
    <>
      <FilterBox filters={FILTERS} />
      <TableBox tableHead={TABLE_HEAD} tableData={DATA_TABLE} />
    </>
  )
}

import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import { useFilters } from '@/hooks/useFiltes'

type FilterBoxProps = {
  filters: {
    label: string
    name: string
    options: any[]
  }[]
}

export function FilterBox({ filters }: FilterBoxProps) {
  const { onSelectChange } = useFilters()

  return (
    <section className="flex gap-6">
      {filters.map(({ label, name, options }) => (
        <FormControl key={name}>
          <FormLabel>{label}</FormLabel>
          <Select name={name} placeholder="Selecione" onChange={onSelectChange}>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </FormControl>
      ))}
    </section>
  )
}

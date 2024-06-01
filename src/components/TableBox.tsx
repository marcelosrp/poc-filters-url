import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { useFilters } from '@/hooks/useFiltes'

type TableBoxProps = {
  tableHead: { key: string; label: string }[]
  tableData: { [key: string]: any }[]
}

export function TableBox({ tableHead, tableData }: TableBoxProps) {
  const { getFilteredData } = useFilters()
  const filteredData = getFilteredData(tableData)

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            {tableHead.map(({ key, label }) => (
              <Th key={key}>{label}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {filteredData.map((row: { [key: string]: any }, index: number) => (
            <Tr key={index}>
              {tableHead.map(({ key }) => (
                <Td key={key}>{row[key]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

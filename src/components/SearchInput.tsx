import { Input, InputGroup } from '@chakra-ui/react'
import { LuSearch } from 'react-icons/lu'

const SearchInput = () => {
  return (
    <InputGroup startElement={<LuSearch />}>
    <Input placeholder="Search games..." borderRadius={20} variant={'subtle'} />
    </InputGroup>
  )
}

export default SearchInput
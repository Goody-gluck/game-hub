import { Input, InputGroup } from '@chakra-ui/react'
import { useRef } from 'react'
import { LuSearch } from 'react-icons/lu'

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        if(ref.current) onSearch(ref.current.value)
    }}>
        <InputGroup startElement={<LuSearch />}>
        <Input ref={ref} placeholder="Search games..." borderRadius={20} variant={'subtle'} />
        </InputGroup>
    </form>
  )
}

export default SearchInput
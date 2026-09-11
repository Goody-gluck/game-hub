import { Button, Menu } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
     <Menu.Root>
            <Menu.Trigger asChild>
                <Button>
                    <BsChevronDown />
                    Order by Relevance
                </Button>
            </Menu.Trigger>
    
             <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="relevance">Order by Relevance</Menu.Item>
                <Menu.Item value="name">Order by Name</Menu.Item>
                <Menu.Item value="date">Order by Date</Menu.Item>
                <Menu.Item value="rating">Order by Rating</Menu.Item>
                <Menu.Item value="popularity">Order by Popularity</Menu.Item>
                <Menu.Item value="price">Order by Price</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
        </Menu.Root>
  )
}

export default SortSelector
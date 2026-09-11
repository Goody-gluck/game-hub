import { Button, Menu } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
    const sortOrders = [
        { value: '', label: 'Order by Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' }
    ];

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);
  return (
     <Menu.Root>
            <Menu.Trigger asChild>
                <Button>
                    <BsChevronDown />
                    Order by: {currentSortOrder?.label || 'Relevance'}
                </Button>
            </Menu.Trigger>
    
             <Menu.Positioner>
              <Menu.Content>
                {sortOrders.map((order) => (
                  <Menu.Item onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
                    {order.label}
                  </Menu.Item>
                ))}
              </Menu.Content>
            </Menu.Positioner>
        </Menu.Root>
  )
}

export default SortSelector
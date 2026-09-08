import { Button, Menu } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '@/hooks/usePlatform'


const PlatformSelector = () => {
    const {data} = usePlatforms()
  return (
    <Menu.Root>
        <Menu.Trigger asChild>
            <Button>
                <BsChevronDown />
                Platform
            </Button>
        </Menu.Trigger>

         <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
                <Menu.Item key={platform.id} value={platform.id.toString()}>{platform.name}</Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
    </Menu.Root>
  )
}

export default PlatformSelector
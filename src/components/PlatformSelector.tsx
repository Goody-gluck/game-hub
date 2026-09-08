import { Button, Menu } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import type { Platform } from '@/hooks/useGames'
import usePlatform from '@/hooks/usePlatform'

interface Props {
    selectedPlatform: Platform | null
    onSelectPlatform: (platform: Platform) => void
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const {data} = usePlatform()
  return (
    <Menu.Root>
        <Menu.Trigger asChild>
            <Button>
                <BsChevronDown />
                {selectedPlatform?.name || 'Platform'}
            </Button>
        </Menu.Trigger>

         <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
                <Menu.Item onClick={() => onSelectPlatform(platform)} key={platform.id} value={platform.id.toString()}>{platform.name}</Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
    </Menu.Root>
  )
}

export default PlatformSelector
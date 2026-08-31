import {createSystem, defaultConfig, defineConfig} from "@chakra-ui/react"

const config = defineConfig ({
    theme: {
        tokens: {
            
        }
    },
});

const system = createSystem(defaultConfig, config);

export default system;
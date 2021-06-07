import { Button, InputText } from './components'

export {
  Button,
  InputText
}

export const DesignSystem = {
  install (Vue) {
    const components = {
      Button,
      InputText
    }
    
    Object.entries(components).forEach(([name, module]) => {
      Vue.component(`Jds${name}`, module)
    })
  }
}
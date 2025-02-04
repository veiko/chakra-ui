import { createContext } from "@chakra-ui/react-context"
import { ThemingProps } from "@chakra-ui/system"

export interface ButtonGroupContext extends ThemingProps<"Button"> {
  isDisabled?: boolean
}

export const [ButtonGroupProvider, useButtonGroup] =
  createContext<ButtonGroupContext>({
    strict: false,
    name: "ButtonGroupContext",
  })

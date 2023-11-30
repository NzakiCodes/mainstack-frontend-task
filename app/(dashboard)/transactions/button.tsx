import { Button, IconProps, Text } from "@chakra-ui/react";
import { ComponentProps, ComponentType } from "react";

interface TransactionButtonProps extends ComponentProps<"button"> {
  text: string;
  Icon?: ComponentType<IconProps>;
  iconProps?: IconProps;
}

const TransactionButton = (props: TransactionButtonProps) => {
  const { text, Icon, iconProps } = props;
  return (
    <Button
      borderRadius={"100px"}
      gap={1}
      pl={"30px"}
      pr={5}
      py={6}
      display={"flex"}
      alignItems={"center"}
      bg={"gray.50"}
      justifyContent={"center"}
      {...props}
    >
      <Text
        color={"brand"}
        display={"block"}
        lineHeight={9}
        fontSize={16}
        fontWeight={"semibold"}
        letterSpacing={"-0.4px"}
        as={"span"}
      >
        {text}
      </Text>
      {Icon && <Icon py={"6px"} h={5} w={5} fill={"brand"} {...iconProps} />}
    </Button>
  );
};
export default TransactionButton;

import { Button, Stack } from "@chakra-ui/react";

import Balance from "./balance";

const AvailableBalance = ({balance}:{balance:number}) => {
  return (
    <Stack
      direction={"row"}
      minW={462}
      w={462}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Balance size="lg" title="Available Balance" value={balance} />
      <Button
        fontSize={"16px"}
        w={"167px"}
        h={"52px"}
        bgColor={"brand"}
        color={"white"}
        rounded={"full"}
        alignItems={"center"}
        px={"48px"}
        py={"14px"}
        _hover={{ opacity: 0.8 }}
        variant={"unstyled"}
      >
        Withdraw
      </Button>
    </Stack>
  );
};

export default AvailableBalance;

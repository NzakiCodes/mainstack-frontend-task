import {
  HStack,
  Stack,
  Text,
  Button,
  Tooltip,
  Tag,
  Box,
} from "@chakra-ui/react";

import { toCurrency } from "@/utils";
import { InfoIcon } from "@/components/ui/icons";

const Balance = ({
  title,
  value,
  size = "sm",
  hasInfo = false,
  info,
}: {
  title: string;
  value: number;
  size?: "sm" | "lg";
  hasInfo?: boolean;
  info?: string;
}) => (
  <HStack minW={271} justifyContent={"space-between"} alignItems={"flex-start"}>
    <Stack direction={"column"} columnGap={2}>
      <Text
        color={"gray.400"}
        fontSize={14}
        fontWeight={"medium"}
        letterSpacing={"-0.2px"}
        lineHeight={"16px"}
      >
        {title}
      </Text>
      <Text
        fontWeight={"bold"}
        fontSize={size == "sm" ? "28" : "36"}
        letterSpacing={size == "sm" ? "-0.6px" : "-1.5px"}
        color={"brand"}
        lineHeight={size == "sm" ? "38px" : "48px"}
      >
        USD {toCurrency.format(value)}
      </Text>
    </Stack>
    {hasInfo && (
      <Tooltip
        hasArrow
        bg={"brand"}
        shadow={"2xl"}
        label={`${title} ${info !== undefined ? `: ${info}` : ""}`}
      >
        <Box display={"flex"} alignItems={"flex-end"}>
          <InfoIcon h={5} w={5} />
        </Box>
      </Tooltip>
    )}
  </HStack>
);

export default Balance;

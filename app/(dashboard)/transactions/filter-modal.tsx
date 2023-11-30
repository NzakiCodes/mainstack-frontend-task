import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  UseDisclosureProps,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  useBoolean,
  FormLabel,
  FormControl,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import { format } from "date-fns";

import { Calendar } from "@/components/ui/Calendar";
import {
  ChevronLeftIcon,
  ExpandLessIcon,
  ExpandMoreIcon,
} from "@/components/ui/icons";

const transactionstypings: { name: string; value: string }[] = [
  {
    value: "store",
    name: " Store Transactions",
  },
  {
    value: "tips",
    name: "Get Tipped",
  },
  {
    value: "withdrawals",
    name: "Withdrawals",
  },
  {
    value: "chargebacks",
    name: " Chargebacks",
  },
  {
    value: "cashbacks",
    name: "Cashbacks",
  },
  {
    value: "referals",
    name: "Refer & Earn",
  },
];

export const FilterModal = ({
  isOpen,
  onClose,
}: {
  isOpen: UseDisclosureProps["isOpen"];
  onClose: UseDisclosureProps["onClose"];
}) => {
  const [isStartDatePopoverOpen, setIsStartDatePopoverOpen] = useBoolean();
  const [isEndDatePopoverOpen, setIsEndDatePopoverOpen] = useBoolean();
  const [isTransactionTypePopoverOpen, setIsTransactionTypePopoverOpen] =
    useBoolean();

  const today = new Date();

  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  const popover_shadow =
    "0px 6px 12px 0px rgba(92, 115, 131, 0.08), 0px 4px 8px 0px rgba(92, 115, 131, 0.08)";

  return (
    <Drawer
      isOpen={isOpen as boolean}
      placement="right"
      onClose={onClose as () => void}
    >
      <DrawerOverlay />
      <DrawerContent minW={"456px"} m={3} rounded={"24px"}>
        <DrawerHeader
          fontWeight={"bold"}
          my={5}
          mx={1}
          roundedTop={"24px"}
          fontSize={"2xl"}
          lineHeight={"28px"}
        >
          Filter
        </DrawerHeader>
        <DrawerCloseButton
          p={1}
          my={5}
          mx={6}
          size={"lg"}
          stroke={"brand"}
          rounded={"full"}
        />

        <DrawerBody overflowX={"hidden"} position={"relative"}>
          <Stack gap={6}>
            <FormControl>
              <FormLabel color={"brand"} fontWeight={"semibold"}>
                Date Range
              </FormLabel>
              <Flex gap={"6px"}>
                <Popover
                  isOpen={isStartDatePopoverOpen}
                  onOpen={setIsStartDatePopoverOpen.on}
                  onClose={setIsStartDatePopoverOpen.off}
                >
                  <PopoverTrigger>
                    <Button
                      _hover={
                        isStartDatePopoverOpen
                          ? { bg: "white" }
                          : {
                              bg: "gray.200",
                              borderWidth: "3px",
                              borderColor: "gray.200",
                            }
                      }
                      fontSize={"sm"}
                      border={
                        isStartDatePopoverOpen
                          ? "3px solid black"
                          : "3px solid #EFF1F6"
                      }
                      bg={isStartDatePopoverOpen ? "white" : "gray.50"}
                      variant={"ghost"}
                      w={"50%"}
                      py={"22px"}
                      rounded={"xl"}
                    >
                      <Flex w={"full"} justifyContent={"space-between"}>
                        {startDate ? (
                          format(startDate, "dd MMM yyyy")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        {isStartDatePopoverOpen ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                      </Flex>
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent
                    border={"none"}
                    shadow={popover_shadow}
                    w={"412px"}
                    mx={"22px"}
                    rounded={"17px"}
                  >
                    <PopoverBody
                      rounded={"17px"}
                      p={"23px"}
                      shadow={"none"}
                      border={"none"}
                    >
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        onDayClick={setIsStartDatePopoverOpen.off}
                      />
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                <Popover
                  isOpen={isEndDatePopoverOpen}
                  onOpen={setIsEndDatePopoverOpen.on}
                  onClose={setIsEndDatePopoverOpen.off}
                >
                  <PopoverTrigger>
                    <Button
                      _hover={
                        isEndDatePopoverOpen
                          ? { bg: "white" }
                          : {
                              bg: "gray.200",
                              borderWidth: "3px",
                              borderColor: "gray.200",
                            }
                      }
                      fontSize={"sm"}
                      border={
                        isEndDatePopoverOpen
                          ? "3px solid black"
                          : "3px solid #EFF1F6"
                      }
                      disabled={!startDate}
                      bg={isEndDatePopoverOpen ? "white" : "gray.50"}
                      variant={"ghost"}
                      w={"50%"}
                      py={"22px"}
                      rounded={"xl"}
                    >
                      <Flex w={"full"} justifyContent={"space-between"}>
                        {endDate ? (
                          format(endDate, "dd MMM yyyy")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        {isEndDatePopoverOpen ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                      </Flex>
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent
                    border={"none"}
                    shadow={popover_shadow}
                    w={"412px"}
                    mx={"22px"}
                    rounded={"17px"}
                  >
                    <PopoverBody
                      rounded={"17px"}
                      p={"23px"}
                      shadow={"none"}
                      border={"none"}
                    >
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        onDayClick={setIsEndDatePopoverOpen.off}
                      />
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
            </FormControl>
            <FormControl>
              <FormLabel color={"brand"} fontWeight={"semibold"}>
                Transaction Type
              </FormLabel>
              <Popover
                isOpen={isTransactionTypePopoverOpen}
                onOpen={setIsTransactionTypePopoverOpen.on}
                onClose={setIsTransactionTypePopoverOpen.off}
              >
                <PopoverTrigger>
                  <Button
                    _hover={
                      isTransactionTypePopoverOpen
                        ? { bg: "white" }
                        : {
                            bg: "gray.200",
                            borderWidth: "3px",
                            borderColor: "gray.200",
                          }
                    }
                    fontSize={"sm"}
                    border={
                      isTransactionTypePopoverOpen
                        ? "3px solid black"
                        : "3px solid #EFF1F6"
                    }
                    bg={isTransactionTypePopoverOpen ? "white" : "gray.50"}
                    variant={"ghost"}
                    w={"full"}
                    py={"22px"}
                    rounded={"xl"}
                  >
                    <Flex w={"full"} justifyContent={"space-between"}>
                      {startDate ? (
                        format(startDate, "dd MMM yyyy")
                      ) : (
                        <span>Store Transactions</span>
                      )}
                      {isTransactionTypePopoverOpen ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </Flex>
                  </Button>
                </PopoverTrigger>

                <PopoverContent
                  border={"none"}
                  shadow={popover_shadow}
                  w={"412px"}
                  mx={"22px"}
                  rounded={"17px"}
                >
                  <PopoverBody
                    rounded={"17px"}
                    px={"23px"}
                    shadow={"none"}
                    border={"none"}
                  >
                    <Stack>
                      {transactionstypings.map(({ name, value }, idx) => (
                        <Checkbox key={value + idx} p="10px" value={value}>
                          {name}
                        </Checkbox>
                      ))}
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </FormControl>
            <FormControl>
              <FormLabel color={"brand"} fontWeight={"semibold"}>
                Transaction Status
              </FormLabel>
            </FormControl>
          </Stack>
        </DrawerBody>

        <DrawerFooter justifyContent={"space-between"}>
          <Button
            w={"50%"}
            rounded={"full"}
            py={6}
            fontSize={"md"}
            lineHeight={"24px"}
            variant="outline"
            mr={3}
            onClick={onClose}
          >
            Clear
          </Button>
          <Button
            _hover={{ color: "white", opacity: "0.8" }}
            w={"50%"}
            rounded={"full"}
            py={6}
            fontSize={"md"}
            lineHeight={"24px"}
            variant={"solid"}
            bg={"brand"}
            color={"white"}
          >
            Apply
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const TransactionTypeCheckBox = () => (
  <Stack>
    <Checkbox p="14px" value={"transactions"}>
      Store Transactions
    </Checkbox>
    {transactionstypings.map(({ name, value }, idx) => (
      <Checkbox key={value + idx} p="14px" value={value}>
        {name}
      </Checkbox>
    ))}
  </Stack>
);

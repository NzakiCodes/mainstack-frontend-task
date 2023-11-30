import { Calendar } from "@/components/ui/Calendar";
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
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  HStack,
  useBoolean,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

export const FilterModal = ({
  isOpen,
  onClose,
}: {
  isOpen: UseDisclosureProps["isOpen"];
  onClose: UseDisclosureProps["onClose"];
}) => {
  const [isEditing, setIsEditing] = useBoolean();
  const today = new Date();
  const [selected, setSelected] = useState<Date | undefined>();

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
          mx={6}
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

        <DrawerBody position={"relative"} p={"22px"}>
          <Popover
            isOpen={isEditing}
            onOpen={setIsEditing.on}
            onClose={setIsEditing.off}
          >
            <HStack>
              <PopoverAnchor>
                <Input
                  w="auto"
                  display="inline-flex"
                  value={selected&&format(selected as Date, "dd MMM yyyy")}
                />
              </PopoverAnchor>

              <PopoverTrigger>
                <Button colorScheme="pink">
                  {selected ? (
                    format(selected, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
            </HStack>

            <PopoverContent
              border={"none"}
              shadow={popover_shadow}
              w={"412px"}
              mx={"22px"}
              rounded={"17px"}
            >
              <PopoverBody rounded={"17px"} p={"23px"} shadow={"none"} border={"none"}>
                <Calendar
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  onDayClick={setIsEditing.off}
                />
              </PopoverBody>
            </PopoverContent>
          </Popover>
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

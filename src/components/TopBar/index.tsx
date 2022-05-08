import { HStack, Spacer, Text } from "@chakra-ui/react";

interface IProps {
  credits: number;
}

const TopBar: React.FC<IProps> = ({ credits }) => {
  return (
    <HStack h="80px" w="100vw" borderWidth="1px">
      <Spacer />
      <HStack>
        <Text fontSize="lg" mr={4}>
          Credits:
        </Text>
        <Text fontWeight="bold" pr="290px" fontSize="lg">
          {credits}
        </Text>
      </HStack>
    </HStack>
  );
};

export default TopBar;

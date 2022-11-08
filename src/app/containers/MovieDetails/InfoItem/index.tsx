import { Box, HStack, Flex, Tag, Text } from "@chakra-ui/react";

interface IProps {
  label: string;
  value: any;
}

export default function InfoItem({ label, value }: IProps) {
  if (Array.isArray(value)) {
    return (
      <Box>
        <Text fontWeight="600" fontSize="2xl" textTransform="capitalize">
          {label}
        </Text>
        <HStack>
          {value.map((i) => (
            <Tag size="md" colorScheme="teal" key={i.key}>
              {i.name || i.key}
            </Tag>
          ))}
        </HStack>
      </Box>
    );
  }

  return (
    <Flex gridGap={2} alignItems="center">
      <Text
        fontWeight="300"
        fontSize="xl"
        textTransform="capitalize"
      >{`${label}: `}</Text>
      <Text fontWeight="600" fontSize="2xl" textTransform="capitalize">
        {value}
      </Text>
    </Flex>
  );
}

// src/components/game/EventSystem.jsx
import { Card, Flex, Text, Button, View } from "@aws-amplify/ui-react";

const EventSystem = ({ event, onChoiceSelect }) => {
  if (!event) return null;

  const choices = JSON.parse(event.choices);

  return (
    <Card variation="elevated" padding="2rem">
      <Flex direction="column" gap="1.5rem">
        <View>
          <Text fontSize="1.5em" fontWeight="bold">{event.title}</Text>
          <Text fontSize="1.1em" marginTop="0.5rem">{event.description}</Text>
        </View>

        <Flex direction="column" gap="1rem">
          {choices.map((choice, index) => {
            const impact = JSON.parse(choice.impact);
            return (
              <Button
                key={index}
                onClick={() => onChoiceSelect(choice)}
                variation="primary"
                size="large"
              >
                <Flex direction="column" gap="0.5rem" width="100%">
                  <Text>{choice.text}</Text>
                  <Text fontSize="0.8em" color="rgba(255,255,255,0.8)">
                    Impact: {Object.entries(impact)
                      .map(([key, value]) => `${key} ${value >= 0 ? '+' : ''}${value}`)
                      .join(', ')}
                  </Text>
                </Flex>
              </Button>
            );
          })}
        </Flex>
      </Flex>
    </Card>
  );
};

export default EventSystem;
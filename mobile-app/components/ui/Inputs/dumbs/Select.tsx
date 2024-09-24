import { Check, ChevronUp } from "@tamagui/lucide-icons";
import type { SelectProps as CoreSelectProps } from "tamagui";

import { Adapt, Select as SelectCore, Sheet, YStack } from "tamagui";

import { LinearGradient } from "tamagui/linear-gradient";
import ChevronDown from "components/svg/ChevronDown";
import { InputWrapperProps } from "./InputWrapper";
import { ComponentProps, ReactNode } from "react";

export type SelectProps<T> = CoreSelectProps &
  InputWrapperProps & {
    items: T[];
    value: string;
    onChange: (value: string) => void;
    renderItem?: (value: T) => ReactNode;
    getKey: (item: T) => string;
    getLabel: (item: T) => string;
    itemProps?: Partial<ComponentProps<typeof SelectCore.Item>>;
    placeholder?: string;
  };

export function Select<T>({
  value,
  onChange,
  renderItem,
  placeholder,
  items,
  getKey,
  getLabel,
  itemProps,
  ...restProps
}: SelectProps<T>) {
  return (
    <SelectCore
      value={value}
      onValueChange={onChange}
      disablePreventBodyScroll
      {...restProps}
    >
      <SelectCore.Trigger
        theme="input"
        focusStyle={{ borderWidth: 2 }}
        borderRadius={16}
        paddingVertical={8}
        paddingHorizontal={16}
        borderWidth={1}
        borderColor={restProps.error ? "$red.100" : "$light.60"}
        iconAfter={ChevronDown}
      >
        <SelectCore.Value placeholder={placeholder} />
      </SelectCore.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet
          modal
          dismissOnSnapToBottom
          animationConfig={{
            type: "spring",
            damping: 20,
            mass: 1.2,
            stiffness: 250,
          }}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>

          <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>

      <SelectCore.Content>
        <SelectCore.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>

          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={["$background", "transparent"]}
            borderRadius="$4"
          />
        </SelectCore.ScrollUpButton>
        <SelectCore.Viewport
          animation="quick"
          animateOnly={["transform", "opacity"]}
          enterStyle={{ o: 0, y: -10 }}
          exitStyle={{ o: 0, y: 10 }}
          minWidth={200}
        >
          <SelectCore.Group>
            {items.map((item, i) => {
              const key = getKey(item);
              const value = getLabel(item);
              return (
                <SelectCore.Item
                  display="flex"
                  alignItems="center"
                  index={i}
                  key={key}
                  value={key}
                  {...itemProps}
                >
                  <SelectCore.ItemText display={renderItem ? "none" : "block"}>
                    {value}
                  </SelectCore.ItemText>

                  {renderItem && renderItem(item)}

                  <SelectCore.ItemIndicator marginLeft="auto">
                    <Check size={16} />
                  </SelectCore.ItemIndicator>
                </SelectCore.Item>
              );
            })}
          </SelectCore.Group>
        </SelectCore.Viewport>

        <SelectCore.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronDown />
          </YStack>

          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={["transparent", "$background"]}
            borderRadius="$4"
          />
        </SelectCore.ScrollDownButton>
      </SelectCore.Content>
    </SelectCore>
  );
}

export default Select;

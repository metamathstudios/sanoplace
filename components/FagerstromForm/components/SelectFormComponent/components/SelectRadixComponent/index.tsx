import React from 'react';
import { styled } from '@stitches/react';
import { green, mauve, blackA } from '@radix-ui/colors';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as select from '@radix-ui/react-select';

const StyledTrigger = styled(select.SelectTrigger, {
  all: 'unset',
  width: '300px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '10px 10px 10px 10px',
  borderRadius: 15,
  paddingTop: '10px',
  paddingBottom: '10px',
  fontSize: 17,
  lineHeight: 1,
  border: '1px solid #7dba58',
  height: 40,
  gap: 5,
  backgroundColor: 'white',
  color: green.green11,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: mauve.mauve3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

const StyledContent = styled(select.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

const StyledViewport = styled(select.Viewport, {
  padding: 5,
});

const StyledItem = styled(select.Item, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: green.green11,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: green.green9,
    color: green.green1,
  },
});

const StyledLabel = styled(select.Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: mauve.mauve11,
});

const StyledSeparator = styled(select.Separator, {
  height: 1,
  backgroundColor: green.green6,
  margin: 5,
});

const StyledItemIndicator = styled(select.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: green.green11,
  cursor: 'default',
};

const StyledScrollUpButton = styled(select.ScrollUpButton, scrollButtonStyles);

const StyledScrollDownButton = styled(select.ScrollDownButton, scrollButtonStyles);

// Exports
export const Select = select.Root;
export const SelectTrigger = StyledTrigger;
export const SelectValue = select.Value;
export const SelectIcon = select.Icon;
export const SelectContent = StyledContent;
export const SelectViewport = StyledViewport;
export const SelectGroup = select.Group;
export const SelectItem = StyledItem;
export const SelectItemText = select.ItemText;
export const SelectItemIndicator = StyledItemIndicator;
export const SelectLabel = StyledLabel;
export const SelectSeparator = StyledSeparator;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;

// Your app...
const Box = styled('div', {});

export const SelectRadix = (props: any) => {
  return (
  <Box>
    <Select defaultValue={props.value1}>
      <SelectTrigger aria-label={props.ariaLabel}>
        <SelectValue />
        <SelectIcon>
          <ChevronDownIcon />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUpButton>
          <ChevronUpIcon />
        </SelectScrollUpButton>
        <SelectViewport>
          <SelectGroup>
            <SelectLabel>{props.divLabel}</SelectLabel>
            <SelectItem value={props.value1}>
              <SelectItemText>{props.textValue1}</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            {props.value2 !== undefined && <SelectItem value={props.value2}>
              <SelectItemText>{props.textValue2}</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>}
            {props.value3 !== undefined && <SelectItem value={props.value3}>
              <SelectItemText>{props.textValue3}</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>}
            {props.value4 !== undefined && <SelectItem value={props.value4}>
              <SelectItemText>{props.textValue4}</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>}
            {props.value5 !== undefined && <SelectItem value={props.value5}>
              <SelectItemText>{props.textValue5}</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>}
          </SelectGroup>
        </SelectViewport>
        <SelectScrollDownButton>
          <ChevronDownIcon />
        </SelectScrollDownButton>
      </SelectContent>
    </Select>
  </Box>
  )
}

export default SelectRadix
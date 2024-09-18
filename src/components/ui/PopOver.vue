<script setup lang="ts">
import { PopoverArrow, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'radix-vue'

type PopoverProps = {
  side?: 'top' | 'right' | 'bottom' | 'left'
}

defineProps<PopoverProps>()
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger>
      <slot name="trigger"></slot>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        :side="side"
        :side-offset="5"
        align="end"
        class="border min-w-[200px] bg-popover text-popover-foreground shadow-lg rounded-lg will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
      >
        <slot></slot>
        <PopoverArrow class="fill-background shadow-sm" />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

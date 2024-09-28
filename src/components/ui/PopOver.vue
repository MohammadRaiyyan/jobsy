<script setup lang="ts">
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'radix-vue'

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
        class="min-w-[200px] overflow-hidden backdrop-blur-md bg-popover/65 border text-popover-foreground shadow-xl rounded-xl will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade z-20"
      >
        <slot></slot>
        <!-- <PopoverArrow class="fill-background shadow" /> -->
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

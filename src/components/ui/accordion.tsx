import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"

import { cn } from "@/lib/utils"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("not-last:border-b", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 cursor-pointer items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] outline-none hover:underline focus-visible:bg-sea-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto",
          className
        )}
        {...props}
      >
        {children}
        <span
          data-slot="accordion-trigger-icon"
          aria-hidden="true"
          className="pointer-events-none relative flex size-8 shrink-0 items-center justify-center text-ink-700 transition-[color,transform] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-aria-expanded/accordion-trigger:rotate-180 group-aria-expanded/accordion-trigger:text-ink-950 motion-reduce:transition-none motion-reduce:group-aria-expanded/accordion-trigger:rotate-0"
        >
          <span className="absolute h-px w-4 rounded-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
          <span className="absolute h-4 w-px rounded-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-aria-expanded/accordion-trigger:rotate-90 group-aria-expanded/accordion-trigger:scale-y-0 motion-reduce:transition-none" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "h-(--accordion-panel-height) pt-0 pb-2.5 transition-[height,opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] data-ending-style:h-0 data-ending-style:opacity-0 data-ending-style:-translate-y-1 data-starting-style:h-0 data-starting-style:opacity-0 data-starting-style:-translate-y-1 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

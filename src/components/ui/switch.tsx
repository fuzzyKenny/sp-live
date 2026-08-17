import type * as React from "react"

import { cn } from "@/lib/utils"

function Switch({
  className,
  checked = false,
  ...props
}: Omit<React.ComponentProps<"button">, "checked"> & {
  checked?: boolean
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      data-state={checked ? "checked" : "unchecked"}
      className={cn(
        "relative inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border border-transparent bg-input transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary",
        className
      )}
      {...props}
    >
      <span
        data-state={checked ? "checked" : "unchecked"}
        className="pointer-events-none block size-5 rounded-full bg-background shadow-sm ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
      />
    </button>
  )
}

export { Switch }

import React from 'react'
import { Button } from './ui/button'

interface QuantityPickerProps {
    increment: any
    decrement: any
    numberOfitems: number
}

export default function QuantityPicker({increment, decrement, numberOfitems}: QuantityPickerProps) {
  return (
    <div className='flex items-center'>
          <div className="px-2 text-xs">PCS</div>
        <Button
          variant={'ghost'}
          size={'sm'}
          className="w-10 h-10 text-2xl"
          onClick={decrement}
        >
            -
        </Button>
        <p className="w-10 h-10 pt-2 text-base md:w-8 md:h-8 md:pt-2 md:text-xs m-0 border-t border-b text-center">
            {numberOfitems}
        </p>
        <Button
            variant={'ghost'}
            size={'sm'}
            className="w-10 h-10 text-xl"
            onClick={increment}
        >
            +
        </Button>
    </div>
  )
}
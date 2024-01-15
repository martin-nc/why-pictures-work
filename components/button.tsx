'use client';

import { useState } from "react";

export default function Button({ text } : {text : string}){

  const [toggle, setToggle] = useState(false)

  return (
      <button className="bg-slate-700 text-stone-50 rounded-md px-4 py-2" 
              onClick={() => setToggle(!toggle)}>
        {toggle ? text : "Click Me"}
      </button>
  )
}
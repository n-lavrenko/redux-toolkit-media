import { useState } from 'react';
import {GoChevronDown, GoChevronLeft} from 'react-icons/go';

export default function ExpandablePanel({ header, children }) {
	const [expanded, setExpanded] = useState(false);

  return (
    <div className='mb-2 border p-2 shadow-md rounded'>
      <div className='flex p-2 justify-between items-center'>
        <div className='flex flex-row items-center justify-between'>
          {header}
        </div>
				<div className="cursor-pointer" onClick={() => setExpanded(!expanded)}>
				{	expanded ? <GoChevronDown /> : <GoChevronLeft />}
				</div>
      </div>
			{
				expanded && <div className='p-3 border-t'>{children}</div>
			}
      
    </div>
  );
}

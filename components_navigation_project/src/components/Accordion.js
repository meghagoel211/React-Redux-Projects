import { useState} from 'react';
import {GoChevronDown, GoChevronRight} from 'react-icons/go';

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (ind)=>{
        if (expandedIndex=== ind) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(ind);
        }
    }

    const renderedItems = items.map((item, index)=>{
        const isExpanded = index=== expandedIndex;

        const icon = <span className='text-2xl'>{isExpanded ? <GoChevronDown />: <GoChevronRight />}</span>

        return (
            <div key={index}>
                <div className='flex p-5 bg-gray-50 border-b items-center cursor-pointer justify-between' onClick={()=>handleClick(index)}>
                    {item.label}
                    {icon}
                    </div>
                {isExpanded && <div className='border-b p-7'>{item.content}</div>}
            </div>
        );
    });
    return <div className='border-x border-t rounded'>{renderedItems}</div>;
}

export default Accordion;
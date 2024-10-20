"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';

import { cn } from '@/lib/utils';
import { Color, Size } from '@/types';

interface FilterProps {
    data: ( Size | Color)[];
    name: string;
    valueKey: string;
}

const Filter: React.FC<FilterProps> = ({
    data,
    name,
    valueKey
}) => {
    const searchParams = useSearchParams();
    const route = useRouter();

    const selectedValue = searchParams.get(valueKey);

    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString());
        const query = {
            ...current,
            [valueKey]: id
        };

        if(current[valueKey] === id) {
            query[valueKey] = null;
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true});

        route.push(url);

    }
    return (
        <div className='mb-8'>
            <h3 className='text-lg font-semibold'>
                {name}
            </h3>
            <hr className='my-4' />
            <div className='flex flex-wrap gap-2'>
                {data.map((filter) => (
                    <div key={filter.id} className='flex items-center'>
                        <button
                        className={cn('rounded-md text-sm p-2 border border-gray-300 bg-white text-black',
                            selectedValue === filter.id && "bg-black text-white")}
                            onClick={()=> onClick(filter.id)}
                            >
                            {filter.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filter;
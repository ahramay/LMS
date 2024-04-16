import React, { ReactNode } from 'react';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import Avatar from '@/components/ui/Avatar';
import {HiPlusCircle} from 'react-icons/hi'

interface CardWithInfoProps {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    icon: ReactNode;
    textData: {
        leadCount: number;
        leadText: string;
        tagText: string;
        subTagText:string;
    };
    tagIcon?: ReactNode;
}

const CardWithInfo: React.FC<CardWithInfoProps> = ({
    onClick,
    icon,
    textData,
    tagIcon,
}) => {
    const { leadCount, leadText, tagText ,subTagText} = textData;

    return (
        <Card
            clickable
            className="hover:shadow-lg transition duration-150 ease-in-out"
            onClick={onClick}
        >
            <div className="flex items-center gap-4">
                <Avatar className="mr-4 bg-emerald-500" icon={icon} />
                <div>
                    <div className="flex gap-1.5 items-end mb-2">
                        <h3 className="font-bold leading-none">{leadCount}</h3>
                        <p className="font-semibold">{leadText}</p>
                    </div>
                    <p className="flex text-base items-center gap-1">
                        <span className="flex items-center rounded-full gap-1">
                            <Tag prefix={tagIcon || <HiPlusCircle className="text-base text-blue-500 mr-1 rtl:ml-1" /> }>
                                {tagText}
                            </Tag>
                        </span>
                        <span>{subTagText}</span>
                    </p>
                   
                </div>
            </div>
        </Card>
    );
};

export default CardWithInfo;

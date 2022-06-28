import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import { Link, useParams } from 'react-router-dom';
import clasNames from 'classnames';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const { slug } = useParams<{slug: string }>()

    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE'  •  'd' from 'MMMM' • 'k'h'mm'")
    
    const isActiveLesson = slug === props.slug;

    return(
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>

            <div className={clasNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',{
                'bg-green-500': isActiveLesson
                })}
            >
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className={clasNames('text-sm  font-medium flex items-center gap-2', {
                                'text-white': isActiveLesson,
                                'text-blue-500': !isActiveLesson
                            })}
                        >
                            <CheckCircle size={20}/>
                            Content released
                         </span>
                        ) : (
                            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
                                <Lock size={20}/>
                                Coming soon
                            </span>
                        )
                    }
                    <span className={clasNames('text-xs rounded py-[0.125rem] px-2 font-bold', {
                            'border-white': isActiveLesson,
                            'border-green-300': !isActiveLesson
                        })}
                    >
                        {props.type === 'live' ? 'LIVE' : 'PRACTICAL CLASS'}
                    </span>
                </header>

                <strong className={clasNames(" mt-5 block", {
                    'text-white' : isActiveLesson,
                    'text-gray-200': !isActiveLesson
                 })} 
                >
                    {props.title}
                </strong>
            </div>
        </Link>
    );
}
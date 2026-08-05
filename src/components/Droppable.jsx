import {useDroppable} from '@dnd-kit/react';

export function Droppable({id, textEnter, children}) {
  const {ref, isDropTarget} = useDroppable({
    id,
  });

  return (
    <div ref={ref} className='drop-zone'>
        {!children && (isDropTarget ? textEnter : "None")}
      {children}
    </div>
  );
}
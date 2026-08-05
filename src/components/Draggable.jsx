import {useDraggable} from '@dnd-kit/react';



export function Draggable({id, text}) {
  const {ref} = useDraggable({id});

  return (
    <button ref={ref}>
      {text}
    </button>
  );
}

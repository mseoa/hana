import { ChangeEvent, ForwardedRef, forwardRef, useId } from 'react';

type Props = {
  label: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  // ref?: RefObject<HTMLInputElement> | null;
  classNames?: string;
};

const LabelInput = (
  {
    label,
    type = 'text',
    placeholder = `${label}...`,
    onChange = () => {},
    // ref = null,
    classNames = '',
  }: Props,
  ref: ForwardedRef<HTMLInputElement> // ref를 별도로 줘야함. 이렇게 하면 ref를 하나밖에 전달못하지만 19버전부터는 여러개 전달 가능
) => {
  const id = useId();
  return (
    <div className='flex'>
      <label htmlFor={id} className='w-32'>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`inp ${classNames}`}
        ref={ref}
        onChange={onChange}
      />
    </div>
  );
};
const LabelInputRef = forwardRef(LabelInput);
export default LabelInputRef;

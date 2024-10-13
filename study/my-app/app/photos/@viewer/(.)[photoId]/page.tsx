import Image from 'next/image';
import Modal from '@/components/Modal';
import { getPhoto } from '@/lib/photos';

export default async function PhotoInterceptor({
  params: { photoId },
}: {
  params: { photoId: string };
}) {
  const { title, url } = await getPhoto(+photoId);
  return (
    <Modal>
      <div className='w-full'>
        <Image
          src={url}
          alt={title}
          width={600}
          height={600}
          //   loading='lazy'
          priority
        />
        <h2 className='text-2xl'>{title}</h2>
      </div>
    </Modal>
  );
}

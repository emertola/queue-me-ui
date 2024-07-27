import { FC } from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { useQuery } from '@tanstack/react-query';
import { currentUser } from '@/api';

const DisplayProfile: FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['profileUser'],
    queryFn: currentUser,
  });

  if (error)
    return (
      <div className="text-red-600">{error.message || 'Request failed.'}</div>
    );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex items-center ml-3 mb-9">
      <Avatar className="w-1/5 h-1/5 mr-3">
        <AvatarImage
          src={`${data?.data.imgUrl ?? 'https://github.com/shadcn.png'}`}
        />
      </Avatar>
      <div className="flex flex-col items-start">
        <h3 className="text-md text-center text-gray-700 font-semibold">
          {data?.data.firstName} {data?.data.lastName}
        </h3>
        <div className="text-[11px] text-center text-gray-400">
          {data?.data.email}
        </div>
      </div>
    </div>
  );
};

export default DisplayProfile;

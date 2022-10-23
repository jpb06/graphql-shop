type AvatarProps = {
  onClick?: () => void;
  name: string;
};

export const Avatar = ({ onClick, name }: AvatarProps) => (
  <div
    className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600"
    onClick={onClick}
  >
    <span className="font-medium text-gray-600 dark:text-gray-300">{name}</span>
  </div>
);

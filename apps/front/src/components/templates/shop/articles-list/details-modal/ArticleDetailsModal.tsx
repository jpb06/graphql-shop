import { useAtom } from 'jotai';
import Image from 'next/image';

import { ArrayItemType } from '../../../../../types/ArrayItemType.type';
import { ProductsArrayType } from '../article/Article';
import { articleDetailsModalAtom } from '../state/article-details-modal.state';

type ArticleDetailsModalProps = Partial<
  Pick<
    ArrayItemType<ProductsArrayType>,
    'name' | 'description' | 'image' | 'price'
  >
> & {
  hidden: boolean;
};

export const ArticleDetailsModal = ({
  hidden,
  image,
  name,
  description,
  price,
}: ArticleDetailsModalProps) => {
  const [, setModalState] = useAtom(articleDetailsModalAtom);

  const rootClassname = hidden
    ? 'hidden'
    : 'flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center';

  const handleClose = () => {
    setModalState({ hidden: true });
  };

  return (
    <div
      id="productModal"
      tabIndex={-1}
      aria-hidden={hidden ? 'true' : 'false'}
      className={rootClassname}
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        {/* Modal content */}
        <div className="relative rounded-lg shadow bg-gray-700">
          {/* Modal header */}
          <div className="flex justify-between items-start p-4 rounded-t border-b border-gray-600">
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
              data-modal-toggle="productModal"
              onClick={handleClose}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-6 space-y-6">
            {image && (
              <Image
                src={image}
                alt={name}
                width={640}
                height={480}
                placeholder="blur"
                blurDataURL="https://loremflickr.com/320/240"
                className="rounded-t-md"
              />
            )}
            <p className="text-base leading-relaxed text-white text-right">
              {price} €
            </p>
            <p className="text-base leading-relaxed text-gray-400">
              {description}
            </p>
          </div>
          {/* Modal footer */}
          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

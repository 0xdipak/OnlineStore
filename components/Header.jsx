import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-10 shadow">
      <div className="container mx-auto p-6 flex justify-between">
        <Link href="/" className="text-2xl font-bold">
          OnlineStore.
        </Link>
        <div className="flex items-center justify-center gap-8">
          <Link
            href="/cart"
            className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
          >
            <div className="relative">
              <AiOutlineShoppingCart className="w-7 h-7 flex-shrink-0" />
            </div>
            <p className="text-lg">
              $0.00{""}
              <span className="text-sm text-gray-500">(0)</span>
            </p>
          </Link>
          <Link href="/search">
            <BsSearch className='h-7 w-7 ml-5' />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header
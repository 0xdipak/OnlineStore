"use client";
import ProductImage from "@/components/ProductImage";
import { Dialog } from "@headlessui/react";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ReactStars from "react-stars";
import { Bars } from "react-loader-spinner";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const id = useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await res.json();

      setProduct(product);
      setLoading(false);
    }

    fetchProduct();
  }, [id]);

  console.log(product);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        router.back();
      }}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-3xl rounded bg-white p-10">
          {loading ? (
            <div className="w-full h-full">
              <Bars width={30} height={46} color={"green"} />
            </div>
          ) : (
            <div className="flex gap-x-8 h-96">
              {product?.image && (
                <div className="relative w-72 h-full hidden md:inline">
                  <ProductImage product={product} fill />
                </div>
              )}

              <div className="flex-1 flex flex-col">
                <div className="flex-1">
                  <h4 className="font-semibold">{product?.title}</h4>
                  <p className="font-medium text-sm">${product?.price}</p>

                  <div className="flex items-center text-sm my-4">
                    {product?.rating.rate && (
                      <div className="flex items-center">
                        <ReactStars
                          size={20}
                          half={true}
                          value={product?.rating.rate}
                          edit={false}
                        />
                        <p>({product?.rating.rate})</p>
                      </div>
                    )}
                    <p className="text-blue-600 ml-2 hover:underline cursor-pointer text-xs">
                      See all {product?.rating.count} reviews
                    </p>
                  </div>

                  <p className="line-clamp-5 text-sm">{product?.description}</p>
                </div>

                <div className="flex  items-center justify-center space-x-5 text-sm">
                  <button className="border border-gray-600 rounded-lg py-1 px-4 hover:bg-green-500">
                    Add to Cart
                  </button>

                  <button
                    onClick={() => window.location.reload()}
                    className="border border-gray-600 rounded-lg py-1 px-4 hover:bg-green-500"
                  >
                    View full details
                  </button>
                </div>
              </div>
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;

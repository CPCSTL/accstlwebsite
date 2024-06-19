import Base from "@layouts/Baseof";
import Link from "next/link";
import React from "react";

const Store = () => {
  return (
    <Base>
      <div className="w-full flex-col justify-center px-6 text-center lg:px-10">
        <h1 className="pb-10 pt-10 text-3xl">
          Welcome to the Arab Cultural Center Store
        </h1>
        <p className="mb-4 text-lg">
          Welcome to our store, where we celebrate the rich heritage and vibrant
          culture of the Arab world through a diverse selection of products. Our
          store offers a curated collection of items that reflect the beauty,
          artistry, and tradition of Arab culture.
        </p>
        <p className="mb-4 text-lg">
          From handmade crafts and traditional clothing to contemporary art and
          literature, our store has something for everyone. Each product is
          carefully chosen to provide a unique and authentic experience,
          connecting you with the timeless traditions and modern innovations of
          the Arab world.
        </p>
        <p className="mb-4 text-lg">
          By shopping with us, you support our mission to promote cultural
          exchange and understanding. Your purchase helps sustain our programs
          and events that bring people together and foster a greater
          appreciation for the rich tapestry of Arab culture.
        </p>
        <p className="mb-4 text-lg">
          Explore our collection and find the perfect item that speaks to you.
          Thank you for supporting the Arab Cultural Center and being a part of
          our community.
        </p>
        <Link
          href="https://www.zeffy.com/ticketing/ca8bbc28-96ee-40f1-a258-115e5592feb6"
          passHref
        >
          <button className="mb-4 mt-4 rounded-md bg-green-600 px-6 py-2 text-white hover:bg-green-700">
            Visit Our Store
          </button>
        </Link>
      </div>
    </Base>
  );
};

export default Store;

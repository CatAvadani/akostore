"use client";

import { Review } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";
import ReviewForm from "./reviewForm";

const ReviewList = ({
  userId,
  productId,
  productSlug,
}: {
  userId: string;
  productId: string;
  productSlug: string;
}) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const reload = () => {
    console.log("Review Submitted");
  };

  return (
    <div className=" space-y-4">
      {reviews.length === 0 && <div>No review yet</div>}
      {userId ? (
        <ReviewForm
          userId={userId}
          productId={productId}
          onReviewSubmitted={reload}
        />
      ) : (
        <div>
          Please
          <Link
            className=" text-blue-700  px-2"
            href={`/signIn?callbackUrl=/product/${productSlug}`}
          >
            sign in
          </Link>
          to write a review.
        </div>
      )}
      <div className=" flex flex-col gap-3">{/* Reviews Here */}</div>
    </div>
  );
};

export default ReviewList;

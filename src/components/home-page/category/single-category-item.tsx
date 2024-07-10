import React from "react";
import { Card, CardContent, CardHeader } from "../../ui/card";
import Image from "next/image";
import { Category } from "@/types/category";

type Props = {
  category: Category;
};

const SingleCategoryItem = ({ category }: Props) => {
  return (
    <Card>
      <CardHeader className="">
        <Image src={category.imageUrl} alt="" height={100} width={100} />
      </CardHeader>
      <CardContent>
        <h3>{category.name}</h3>
      </CardContent>
    </Card>
  );
};

export default SingleCategoryItem;

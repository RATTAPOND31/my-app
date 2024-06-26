import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function ArticleCard(props) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold"> {props.id}</p>
        <small className="text-default-500">{props.title}</small>
        <h4 className="font-bold text-large">{props.content}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4zdXf7xnIUnH-U2TCDUNAoaE2UNifDDWITuL7yE6tw&s"
          width={270}
        />
      </CardBody>
    </Card>
  );
}

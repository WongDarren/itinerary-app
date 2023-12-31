/*
 * Copyright (c) 2023 Darren Wong. All rights reserved.
 *
 */

import React from "react";
import Card from "@/components/Card";

const files = [
  {
    id: 1,
    name: 'Japan',
    date: '2024',
    imageSrc:
      'https://media.istockphoto.com/id/1131743616/photo/aerial-view-of-tokyo-cityscape-with-fuji-mountain-in-japan.jpg?s=612x612&w=0&k=20&c=0QcSwnyzP__YpBewnQ6_-OZkn0XDtq-mXyvLSSakjZE='
  },
  {
    id: 2,
    name: 'Japan',
    date: '2024',
    imageSrc:
      'https://media.istockphoto.com/id/1131743616/photo/aerial-view-of-tokyo-cityscape-with-fuji-mountain-in-japan.jpg?s=612x612&w=0&k=20&c=0QcSwnyzP__YpBewnQ6_-OZkn0XDtq-mXyvLSSakjZE='
  },
  {
    id: 3,
    name: 'Japan',
    date: '2024',
    imageSrc:
      'https://media.istockphoto.com/id/1131743616/photo/aerial-view-of-tokyo-cityscape-with-fuji-mountain-in-japan.jpg?s=612x612&w=0&k=20&c=0QcSwnyzP__YpBewnQ6_-OZkn0XDtq-mXyvLSSakjZE='
  },
  {
    id: 4,
    name: 'Japan',
    date: '2024',
    imageSrc:
      'https://media.istockphoto.com/id/1131743616/photo/aerial-view-of-tokyo-cityscape-with-fuji-mountain-in-japan.jpg?s=612x612&w=0&k=20&c=0QcSwnyzP__YpBewnQ6_-OZkn0XDtq-mXyvLSSakjZE='
  },
  {
    id: 5,
    name: 'Japan',
    date: '2024',
    imageSrc:
      'https://media.istockphoto.com/id/1131743616/photo/aerial-view-of-tokyo-cityscape-with-fuji-mountain-in-japan.jpg?s=612x612&w=0&k=20&c=0QcSwnyzP__YpBewnQ6_-OZkn0XDtq-mXyvLSSakjZE='
  },
  {
    id: 6,
    name: 'Japan',
    date: '2024',
    imageSrc:
      'https://media.istockphoto.com/id/1131743616/photo/aerial-view-of-tokyo-cityscape-with-fuji-mountain-in-japan.jpg?s=612x612&w=0&k=20&c=0QcSwnyzP__YpBewnQ6_-OZkn0XDtq-mXyvLSSakjZE='
  }
];

function CardList() {
  return (
    <>
      {files.map(file => (
        <li key={file.id} className="relative">
          <Card name={file.name} date={file.date} imageSrc={file.imageSrc} />
        </li>
      ))}
    </>
  );
}

export default CardList;

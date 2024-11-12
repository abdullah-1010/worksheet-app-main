"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    header: "ID",
    cell: ({ row }) => <p className="text-14-medium">{row.index + 1}</p>,
  },
  {
    accessorKey: "userName",
    header: "User Name",
    cell: ({ row }) => (
      <p className="text-14-medium">{row.original.userName}</p>
    ),
  },
  {
    accessorKey: "quizLevel",
    header: "Quiz Level",
    cell: ({ row }) => (
      <p className="text-14-regular">{row.original.quizLevel}</p>
    ),
  },
  {
    accessorKey: "quizTopic",
    header: "Quiz Topic",
    cell: ({ row }) => (
      <p className="text-14-regular">{row.original.quizTopic}</p>
    ),
  },
  {
    accessorKey: "tmarks",
    header: "Total Marks",
    cell: ({ row }) => <p className="text-14-medium">{row.original.marks}</p>,
  },
  {
    accessorKey: "gmarks",
    header: "Gained Marks",
    cell: ({ row }) => <p className="text-14-medium">{row.original.marks}</p>,
  },
  //   {
  //     id: "actions",
  //     header: () => <div className="pl-4">Gained Marks</div>,
  //     cell: ({ row }) => (
  //       <div className="flex gap-2">
  //         <button className="text-blue-500">View</button>
  //         <button className="text-red-500">Delete</button>
  //       </div>
  //     ),
  //   },
];

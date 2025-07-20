import { Button } from "@heroui/react";
import React from "react";
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
function EditButton({ className, editMode, setEditMode }) {
  return (
    <Button
      isIconOnly
      aria-label="Like"
      color="danger"
      className={`flex justify-center items-center bg-white border-gray-700 border rounded-full text-blue-950 w-7 h-7 text-sm cursor-pointer ${className}`}
      onClick={() => {
        setEditMode(!editMode);
      }}
    >
      {editMode ? <RxCross2 /> : <MdEdit />}
    </Button>
  );
}

export default EditButton;

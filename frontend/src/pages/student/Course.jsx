import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";

const Course = ({course}) => {
  return (
    <Link to={`/course-detail/${course._id}`}>
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img
          src={course.courseThumbnail}
          alt="course"
          className="w-full h-36 object-cover rounded-t-lg"
        />
      </div>
      <CardContent className="px-5 py-4 space-y-3">
        <h1 className="hover:underline font-bold text-lg truncate text-black dark:text-white">
          {course.courseTitle}
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={course.creator?.photoUrl || "https://github.com/shadcn.png"} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-medium text-sm text-black dark:text-white">{course.creator?.name}</h1>
          </div>
          <Badge className={'bg-blue-600 text-white px-2 py-1 text-xs rounded-full'}>
            {course.courseLevel}
          </Badge>
        </div>
        <div className="text-lg font-bold">
            <span className="text-black dark:text-white">₹{course.coursePrice}</span>
        </div>

        {/* Other details in card  */}
        <div>
        <div className="flex justify-between items-center  border-t border-gray-200 pt-2">              
          </div>
          <div className="flex justify-between items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="text-black dark:text-white">4.5</span>
              <h1 className="text-sm text-black dark:text-white">Rating</h1>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-black dark:text-white">100</span>
                <h1 className="text-sm text-black dark:text-white">Students</h1>
            </div>
          </div>
        </div>
        {/* other details end */}
      </CardContent>
    </Card>
    </Link>
  );
};

export default Course;